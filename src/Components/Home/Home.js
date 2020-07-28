import React,{ useState } from 'react'
import Display from '../Display/Display'
import Intro from '../intro/Intro'
import Carousel from '../Carousel/SiteCarousel'
import Data from '../../data'
import Contact from '../Contact/Contact'
import './Home.css'

const Home = () => {
    const [ data, setData ] = useState(Data)
    console.log('home', data)

    
    return (
        <div className='home-container' >
                <Carousel data={data}/>
                <Intro/>
                <Display data={data}/>
                <Contact/>
        </div>
    )
}

export default Home

//removed height from div height: '80vh'