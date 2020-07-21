import React,{ useState } from 'react'
import Display from '../Display/Display'
import Presentation from '../Presentation/Presentation'
import Carousel from '../Carousel/SiteCarousel'
import './Home.css'

const Home = () => {
    
    return (
        <div className='home-container' >
            <Carousel/>
            <Presentation/>
            <Display />
        </div>
    )
}

export default Home

//removed height from div height: '80vh'