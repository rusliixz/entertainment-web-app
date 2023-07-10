import styled from "styled-components";
import { devices } from "../../constants";

export const CardWrap = styled.div`
    width: ${({ size }) => (size === 'big' ? 'calc(100vw * 0.64)' : 'calc((100% - 15px) / 2)')};
    height: ${({ size }) => (size === 'big' ? '100%' : '100%')};
    position: relative;

    @media ${devices.tablet} {
        width: ${({ size }) => (size === 'big' ? 'calc(100vw * 0.61)' : 'calc((100% - 60px) / 3)')};
    }

    @media ${devices.laptop} {
        width: ${({ size }) => (size === 'big' ? 'calc(100vw * 0.3264)' : 'calc((100% - 120px) / 4)')};
    }
`

export const ImgWrap = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    &:hover {
        .CardImg{
            opacity: 0.50;
        }
        cursor: pointer;
        .Card_Btn {
            display: flex;
            z-index: 1;
        }
    }
`

export const CardImg = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
`

export const CardBtn = styled.button`
    width: 117px;
    padding: 9px 24px 9px 9px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 28.5px;
    border: none;
    display: none;
    align-items: center;
    gap: 19px;
    z-index: 10;
    position: absolute;
    bottom: ${({ size }) => (size === 'big' ? '45%' : '39.5%')};
    right: ${({ size }) => (size === 'big' ? '39%' : '31%')};
`

export const BtnInfo = styled.p`
    font-size: 18px;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #FFF;
`

export const CardInfo = styled.div`
    width: 100%;
    color: #FFF;
    ${({ size }) => (size
        ? {
            position: "absolute",
            bottom: '16px',
            left: '16px'
        }
        : {
            marginTop: '8px'
        }
    )}
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    font-size: ${({ size }) => size ? '12px' : '11px'};

    &>div{
        display: flex;
        align-items: center;
        gap: ${({ size }) => size ? '6px' : '4px'};
    }

    @media ${devices.tablet} {
        font-size: ${({ size }) => size ? '15px' : '13px'};
        &>div{
            gap: ${({ size }) => size ? '6px' : '6px'};
        }
    }
`

export const Dot = styled.div`
    width: 3px;
    height: 3px;
    background-color: #fff;
    opacity: 0.5;
    border-radius: 50%;
`
export const CardTitle = styled.h3`
    font-weight: 500;
    font-size: ${({ size }) => size ? '15px' : '14px'};
    color: #FFFFFF;
    @media ${devices.tablet} {
        font-size: ${({ size }) => size ? '24px' : '18px'};
    }
`

export const CardBookmark = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 50%;
    background: #10141E;
    stroke: #FFFFFF;
    fill: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    z-index: 1;
    cursor: pointer;
    
    &:hover {
        background: #FFFFFF;
        stroke: #10141E;
        fill: #10141E;
    }

    @media ${devices.tablet} {
        top: 16px;
        right: ${({ size }) => (size === 'big' ? '24px' : '16px')};
    }
`