import React from 'react'
import { Typography } from '@material-ui/core'
import './Intro.css'

const Intro = () => {

    const companyName = 'MMS Landscaping'

    return (
        <section className='intro-container'>

            <Typography variant="h2">{companyName}</Typography>
            <div className='inner-intro-container'>
                <Typography  variant='h3'>
                    Whether it's just maintance that you need or looking to transform your garden, we can help.
                    We provide full landscaping services with high quality results that will go beyong your landscaping needs.
                    With over 15 years of experience in the industry our success is dedicated to building long term relationships with our clients
                    providing high quality services.
                </Typography>
            </div>
        </section>
    )
}

export default Intro
