import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../login/login'
import Registration from '../registration/registration'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login />} />
                <Route path='/register' element={ <Registration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation