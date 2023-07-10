import styled from "styled-components";
import { devices } from "../../constants";

export const Search = styled.div`
display: flex;
gap: 16px;
align-items: center;

@media ${devices.tablet} {
    gap: 24px;
}
`

export const SearchIcon = styled.img`
width: 24px;
height: 24px;
`

export const SearchInput = styled.input`
width: 100%;
border: none;
outline: none;
background-color: transparent;
font-family: 'Outfit';
font-style: normal;
font-weight: 300;
font-size: 16px;
color: #FFFFFF;
caret-color: #FC4747;

@media ${devices.tablet}{
    font-size: 24px;
}

&::placeholder{
    opacity: 0.5;
    mix-blend-mode: normal;
}
`