import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../constants";

export const Container = styled.div`
   min-height: 100vh;
   margin: 0 auto;
   padding-bottom: 61px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   
   @media ${devices.tablet} {
      padding: 24px;
   }
   @media ${devices.laptop} {
      flex-direction: row;
      gap: 0;
      padding: 32px 0 32px 32px;
   } 
`

export const Bar = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   padding: 16px;
   background: #161D2F;
   justify-content: space-between;

   @media ${devices.tablet} {
      border-radius: 10px;
      padding: 21px 16px 19px 24px;
   }
   @media ${devices.laptop}{
      width: 96px;
      flex-direction: column;
      padding: 36px 32px;
      justify-content: flex-start;
      gap: 75px;
   }
`

export const MainMenu = styled.div`
   display: flex;
   gap: 24px;
   @media ${devices.laptop}{
      flex-direction: column;
      gap: 40px;
   }
`

export const Pages = styled.div`
   padding: 0 16px;

   @media ${devices.laptop}{
      width: calc((100% - 96px));
      padding: 0 36px;
   }
`

export const Link = styled(NavLink)`
   /* &>svg{
      width: 16px;
      height: 16px;
} */
   &:hover>svg{
      fill: #FC4747;
   }
`

export const ProfileLink = styled(NavLink)`
   width: 40px;   
   height: 40px;
`
export const ProfileImg = styled.img`
   height: 100%;
   width: 100%;
   border-radius: 40px;
   border: 1px solid rgba(255, 255, 255, 0.25);
`