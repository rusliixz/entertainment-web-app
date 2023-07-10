import React from 'react'
import Carousel from '../Carousel'
import { CardsWrapper, SectionContainer, SectionTitle } from './style'
import Card from '../Card'

export default function Section({ data }) {
    return (
        <SectionContainer>
            <SectionTitle>{data.title}</SectionTitle>
            {
                data.title === 'Trending'
                    ? <Carousel data={data.data} />
                    : <CardsWrapper>
                        {
                            data.data.map(item => (
                                <Card key={item.id} data={item}/>
                            ))
                        }
                    </CardsWrapper>
            }
        </SectionContainer>
    )
}
