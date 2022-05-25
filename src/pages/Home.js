import React from 'react'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={()=> navigate('/signup')}>Sign Up</button>
            <button onClick={()=> navigate('/login')}>Log In</button>
            <h1>"YOU ARE MORE PRECIOUS TO THIS WORLD THAN YOU'LL EVER KNOW"</h1>
        </div>
    )
}