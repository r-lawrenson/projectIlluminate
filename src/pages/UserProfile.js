import illuminate from '../images/illuminate-logos_black.png'
import '../userprofile.css'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const UserProfile = ({user}) => {
    // const [user, setUser] = useState()
    const navigate = useNavigate();
    return (
        <div className='userprofile'>
            <img src={illuminate} alt='Illuminate Logo'/>
            <div className='userlinks'>
            <h1 user={user}> Welcome {user}</h1>
            <div className='buttons'>
            <button onClick={() => navigate('/journal')}>Journal</button>
            <button onClick={() => navigate('/resource')}>Mental Health Search</button>
            <button onClick={() => navigate('/tranquilzone')}>Tranquil Zone</button>
            </div>
          </div>
        </div>
    )
}