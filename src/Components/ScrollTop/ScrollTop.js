import React, { useState } from 'react'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import { Link } from 'react-scroll'
import './ScrollTop.css'

const ScrollTop = () => {

    const [ visible, setVisible ] = useState(false)


    const toggleVisibility = () => {
       window.pageYOffset > 300 ?
            setVisible(true)
            :
            setVisible(false)
    }

    // const scrollUp = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }

    //using event listener for checking purposes only whether or not show scroll-up icon

    document.addEventListener('scroll', toggleVisibility)


    return (
        <> 
            {
                visible && (
                    <Link
                        activeClass="active"
                        to='header'
                        spy={true}
                        smooth={true}
                        duration= {800}
                    >
                        <ExpandLessRoundedIcon 
                            button
                            id='scroll-up'
                            fontSize='large'
                            color='white'
                        />
                     </Link>
                )
            }
        </>
    )
}

export default ScrollTop
