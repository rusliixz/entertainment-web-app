import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Tv from '../pages/Tv'
import Bookmark from '../pages/Bookmark'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

export const sidebar = [
    {id: 1, path: '/', title: 'Home', element: <Home />},
    {id: 2, path: '/movies', title: 'Movies', element: <Movies />},
    {id: 3, path: '/tv', title: 'TVSeries', element: <Tv />},
    {id: 4, path: '/bookmark', title: 'Bookmark', element: <Bookmark />},
    {id: 5, path: '/login', title: 'Login', element: <Login />},
    {id: 6, path: '/signup', title: 'Signup', element: <Signup />}
]