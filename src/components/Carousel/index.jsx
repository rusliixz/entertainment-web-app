import React from 'react'
import { CarouselWrap } from './style'
import Card from '../Card'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Carousel({ data }) {
  return (
    <ScrollContainer>
      <CarouselWrap>
        {
          data?.map(item => (
            <Card size='big' key={item.id} data={item} />
          ))
        }
      </CarouselWrap>
    </ScrollContainer>
  )
}
