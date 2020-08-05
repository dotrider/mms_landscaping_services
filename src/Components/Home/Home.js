import React, { useState, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import Display from '../Display/Display'
import Intro from '../intro/Intro'
import Carousel from '../Carousel/SiteCarousel'
import Data from '../../data'
import Contact from '../Contact/Contact'
import './Home.css'

const Home = () => {
    const [ data, setData ] = useState(Data)
    console.log('home', data)

    //scroll effect
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })
  
  
    const fadeIn = (classname) => {
        gsap.to(classname, 1, {
          opacity: 1,
          y: -20,
          ease: 'slow'
        })
    }
  
  
    const fadeOut = (classname) => {
      gsap.to(classname, 1, {
        opacity: 0,
        y: -20,
        ease: 'slow',
        stagger: {
          amount: .3
        }
      })
    }
  
    intersection && intersection.intersectionRatio < 0.1?
      fadeOut('.fadeIn')
    : fadeIn('.fadeIn')
  
    
    return (
        <main className='home-container' >
                <Carousel data={data}/>
                <Intro/>
                <Display data={data} sectionRef={sectionRef}/>
            	<Contact/>
        </main>
    )
}

export default Home

//removed height from div height: '80vh'