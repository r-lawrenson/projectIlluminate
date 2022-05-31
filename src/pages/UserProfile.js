import illuminate from '../images/illuminate-logos_black.png'
import '../userprofile.css'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from 'react-router-dom'

export const UserProfile = ({user}) => {
    // const [user, setUser] = useState()
    const navigate = useNavigate();
    return (
        <>
        <nav>
          <Link to="/tranquilzone">Tranquil Zone</Link>
          <Link to="/userprofile">User Profile</Link>
          <Link to="/journal">Journal</Link>

        </nav>
        <div className='userprofile'>
            <img src={illuminate} alt='Illuminate Logo'/>
            <div className='userlinks'>
                <h1 id='welcome' user={user}> Welcome {user}</h1>
                <div className='buttons'>
                    <button className='btn' onClick={() => navigate('/journal')}>Journal</button>
                    <button className='btn' onClick={() => navigate('/resource')}>Mental Health Search</button>
                    <button className='btn' onClick={() => navigate('/tranquilzone')}>Tranquil Zone</button>
                </div>
            </div>
          
        </div>
        </>
    )
}