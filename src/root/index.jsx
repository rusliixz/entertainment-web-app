import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../pages/App'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Base from '../pages/Base'

export default function Root() {
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Navigate to={'/login'} />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Signup />} />
                <Route path='app' element={<Sidebar />}>
                    <Route index element={<Navigate to={'home'} />} />
                    <Route path='home' element={<Base />} />
                    <Route path='movie' element={<Base />} />
                    <Route path='tv' element={<Base />} />
                    <Route path='bookmark' element={<Base />} />
                </Route>
            </Route>
        </Routes>
    )
}
