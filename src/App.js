import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './component/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'

const App = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        const user = fetchUser();
        if(!user) navigate('/login');
    },[])
    return (
        <GoogleOAuthProvider clientId='455717876948-3182p2mgt2u7l7610doj0ei32puuhqo9.apps.googleusercontent.com' >
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<Home />} />
        </Routes>
        </GoogleOAuthProvider>
    )
}

export default App