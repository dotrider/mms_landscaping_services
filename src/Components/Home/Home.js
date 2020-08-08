import React, { useState, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import Display from '../Display/Display';
import Intro from '../intro/Intro';
import Carousel from '../Carousel/SiteCarousel';
import Data from '../../data';
import Contact from '../Contact/Contact';
import './Home.css'

const Home = () => {
    const [ data ] = useState(Data)
    // console.log('home', data)

    //scroll effect
    //https://streamich.github.io/react-use/?path=/story/sensors-useintersection--docs

    const sectionRef = useRef(null);

    //tracks the changes in the intersection of a target element
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '400px',
      threshold: 0.2
    })
  
  //setting class with gsap animation
    const slideIn = (classname) => {
        gsap.to(classname, 1, {
          opacity: 1, 
          y: -5,
          duration:1,
          ease: 'power4.out'
        })
    }
  
  
    const slideOut = (classname) => {
      gsap.to(classname, 1, {
        opacity: 0,
        y: 100,
        ease: 'back'
      })
    }
  
    //Marks when viewport is visible to user
    intersection && intersection.intersectionRatio < 0.2?
      slideOut('.slideIn')
      : 
      slideIn('.slideIn')
  
    
    return (
        <main className='home-container' >
                <Carousel data={data}/>
                <Intro/>
                <Display data={data} sectionRef={sectionRef}/>
            	  <Contact sectionRef={sectionRef}/>
        </main>
    )
}

export default Home

//removed height from div height: '80vh'