import React,{ useState } from 'react'
import Display from '../Display/Display'
import './Home.css'

const Home = () => {
    
    return (
        <div className='home-container' >
            <Display />
        </div>
    )
}

export default Home

//removed height from div height: '80vh'