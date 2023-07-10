import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Bar, Container, Pages, Link, MainMenu, ProfileLink, ProfileImg } from './style'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as HomeIcon } from '../../assets/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as TvIcon } from '../../assets/icon-nav-tv-series.svg'
import { ReactComponent as BookmarkIcon } from '../../assets/icon-nav-bookmark.svg'
import profileImg from '../../assets/image-avatar.png';

export default function Sidebar() {

  return (
    <Container>

      <Bar>
        <NavLink to={'home'}>
          <Logo fill='#FC4747' />
        </NavLink>

        <MainMenu>
          <Link to={'home'} >
            {({ isActive, isPending }) => (
              <HomeIcon fill={isActive ? '#FFFFFF' : '#5A698F'} />
            )}
          </Link>
          <Link to={'movie'} >
            {({ isActive, isPending }) => (
              <MoviesIcon fill={isActive ? '#FFFFFF' : '#5A698F'} />
            )}
          </Link>
          <Link to={'tv'} >
            {({ isActive, isPending }) => (
              <TvIcon fill={isActive ? '#FFFFFF' : '#5A698F'} />
            )}
          </Link>
          <Link to={'bookmark'} >
            {({ isActive, isPending }) => (
              <BookmarkIcon fill={isActive ? '#FFFFFF' : '#5A698F'} />
            )}
          </Link>
        </MainMenu>

        <ProfileLink to={'/app'}>
          <ProfileImg src={profileImg} />
        </ProfileLink>
      </Bar>

      <Pages>
        <Outlet />
      </Pages>
    </Container>
  )
}
