import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpWrap = styled.div`
    padding: 79px 520px 66px 520px;
    background-color: #10141E;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LogoCont = styled.div`
    margin: 0 auto;
    margin-bottom: 83px;
`

export const Container = styled.div`
    margin: 0 auto;
    padding: 32px;
    background: #161D2F;
    border-radius: 20px;
    width: 400px;
`
export const SignUpCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const SignUpTitle = styled.p`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    margin-bottom: 40px;
`

export const StyledInput = styled.input`
    border: none;
    padding: 0 16px 18px 16px;
    border-bottom: 1px solid #5A698F;
    background-color: transparent;
    margin-bottom: 24px;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
    caret-color: #FC4747;
    outline: none;
    &:hover{
        border-bottom: 1px solid #FFFFFF;
    }
    &::placeholder{
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    &:focus{
        border-bottom: 1px solid #FFFFFF;
    }
`

export const SignUpCreateBtn = styled.button`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    padding: 15px;
    background: #FC4747;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    margin-top: 16px;
    margin-bottom: 24px;
    text-decoration: none;
    caret-color: #FC4747;
    &:hover{
        color: #161D2F;
        background: #FFFFFF;
    }
`

export const SignUpText = styled.p`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
    display: flex;
    width: 216px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const StyledLink = styled(Link)`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #FC4747;
    text-decoration: none;
`