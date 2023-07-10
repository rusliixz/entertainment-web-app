import styled from "styled-components";
import { devices } from "../../constants";
import ScrollContainer from "react-indiana-drag-scroll";

export const CarouselWrap = styled(ScrollContainer)`
    display: flex;
    width: max-content;
    gap: 16px;
    margin-top: 16px;

    @media ${devices.laptop} {
        gap: 40px;
    }
`