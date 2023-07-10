import React, { useState } from 'react'
import { CardInfo, CardWrap, Description, ImgWrap, CardImg, Dot, CardTitle, CardBookmark, CardBtn, BtnInfo } from './style'
import { ReactComponent as CategoryIcon } from '../../assets/icon-category-movie.svg'
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-category-tv.svg'
import { ReactComponent as BookmarkEmptyIcon } from '../../assets/icon-bookmark-empty.svg'
import { ReactComponent as BookmarkFullIcon } from '../../assets/icon-bookmark-full.svg'
import { ReactComponent as ImgPlayIcon } from '../../assets/icon-play.svg'


export default function Card({ data, size }) {

  const [cardData, SetCardData] = useState(data)

  function setBookmark() {
    console.log(cardData.id);
    const newData = { ...cardData, isBookmarked: !cardData.isBookmarked }
    fetch(' http://localhost:8000/videos/' + cardData.id, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(res => SetCardData({...res}))
  }
  return (

    <CardWrap size={size}>

      <CardBookmark size={size}>
        <input type="checkbox" id={cardData.id}
          defaultChecked={cardData.isBookmarked}
          onChange={setBookmark}
          style={{ display: 'none' }}
        />
        <label htmlFor={cardData.id}>
          {
            cardData.isBookmarked
              ? <BookmarkFullIcon />
              : <BookmarkEmptyIcon />
          }
        </label>
      </CardBookmark>

      <ImgWrap size={size}>
        <CardBtn size={size} className='Card_Btn'>
          <ImgPlayIcon />
          <BtnInfo>Play</BtnInfo>
        </CardBtn>
        <CardImg src={`http://localhost:8000${cardData?.thumbnail.regular.medium.slice(1)}`} alt={cardData.title} className='CardImg' />
      </ImgWrap>

      <CardInfo size={size}>
        <Description size={size}>
          <span className='year'>{cardData.year}</span>

          <Dot />

          <div>
            {
              cardData.category === 'movie'
                ? <CategoryIcon fill='#FFF' opacity={0.75} />
                : <TvSeriesIcon fill='#FFF' opacity={0.75} />
            }
            <span>{cardData.category_title}</span>
          </div>

          <Dot />

          <span className='year'>{cardData.rating}</span>
        </Description>
        <CardTitle size={size}>{cardData.title}</CardTitle>
      </CardInfo>
    </CardWrap >

  )
}
