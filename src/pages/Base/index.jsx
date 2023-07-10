import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Section from '../../components/Section'
import { Search, SearchIcon, SearchInput } from './style'
import useGet from '../../hooks/useGet'

export default function Base() {

    const [search, setSearch] = useState('');

    let location = useLocation()

    let category = location.pathname.slice((location.pathname.lastIndexOf('/') + 1))
    let placeholder = 'Search for'
    switch (category) {
        case 'movie': placeholder += ' movies'; break
        case 'tv': placeholder += ' TV series'; break
        case 'bookmark': placeholder += ' bookmarked shows'; break
        default: placeholder += ' movies or TV series'; break
    }

    function handleChange(e) {
        setSearch(e.target.value);
    }

    const { data, myError } = useGet(category, search)

    return (
        <div>
            <Search>
                <SearchIcon src='http://localhost:8000/assets/icon-search.svg' />
                <SearchInput type="search" className='search-input'
                    placeholder={placeholder}
                    onChange={handleChange} />
            </Search>
            {
                data.map((item, index) => <Section key={index} data={item} />)
            }
        </div>
    )
}