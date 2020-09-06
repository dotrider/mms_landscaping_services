import React, { useState } from 'react'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import './ScrollTop.css'

const ScrollTop = () => {

    const [ visible, setVisible ] = useState(false)


    const toggleVisibility = () => {
       window.pageYOffset > 300 ?
            setVisible(true)
            :
            setVisible(false)
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    //using event listener only to check weather or not show scroll-up icon

    document.addEventListener('scroll', toggleVisibility)


    return (
        <> 
            {
                visible && (
                    <ExpandLessRoundedIcon 
                        onClick={scrollUp}
                        id='scroll-up'
                        fontSize='large'
                        color='white'
                    />
                )
            }
        </>
    )
}

export default ScrollTop
