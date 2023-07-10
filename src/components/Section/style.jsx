import styled from "styled-components";
import { devices } from "../../constants";

export const SectionContainer = styled.div`
    margin-top: 24px;

    @media ${devices.tablet} {
        margin-top: 33px;
        margin-bottom: 39px;
    }
`

export const SectionTitle = styled.h2`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #FFFFFF;
    @media ${devices.tablet}{
        font-size: 32px;

    }
`

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 15px;
    margin-top: 24px;

    @media ${devices.tablet} {
        gap: 30px;
    }

    @media ${devices.laptop} {
        gap: 32px 40px;
    }
`