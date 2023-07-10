import { useEffect } from "react";
import { useState } from "react";

export default function useGet(category, search) {
    console.log(category, search);
    const [data, setData] = useState([]);
    const [myError, setMyError] = useState(null);

    let url = 'http://localhost:8000/videos'

    if (category === 'home') url += (search ? '?title_like=' + search : '')
    else if (category === 'bookmark') url += (search ? '?title_like=' + search : '?isBookmarked=' + true)
    else url += (search ? '?category=' + category + '&title_like=' + search : '?category=' + category)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json()
            })
            .then(data => {
                console.log(data);
                switch (category) {
                    case 'movie':
                        setData([
                            { title: 'Movies', data: data }
                        ])
                        break
                    case 'tv':
                        setData([
                            { title: 'TV Series', data: data }
                        ])
                        break
                    case 'bookmark':
                        setData([
                            { title: 'Bookmarked Movies', data: data.filter(item => item.category === 'movie') },
                            { title: 'Bookmarked TV Movies', data: data.filter(item => item.category === 'tv') },
                        ])
                        break
                    default:
                        setData([
                            { title: 'Trending', data: data.filter(item => item.isTrending) },
                            { title: 'Recommended for you', data: data.filter(item => !item.isTrending) }
                        ])
                        break

                }
            })
            .catch(err => {
                setMyError(err.message);
            })
    }, [category, search])
    return { data, myError };
}