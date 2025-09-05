import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../login/login'
import Registration from '../registration/registration'
import Welcome from '../Welcome/welcome'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login />} />
                <Route path='/register' element={ <Registration />} />
                <Route path='/home' element={ <Welcome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation