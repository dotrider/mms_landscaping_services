import React,{ useState } from 'react'
import Display from '../Display/Display'
import Presentation from '../Presentation/Presentation'
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
                <Presentation/>
                <Display data={data}/>
                <Contact/>
        </div>
    )
}

export default Home

//removed height from div height: '80vh'