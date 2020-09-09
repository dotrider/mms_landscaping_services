import React, { useState, useRef } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
	Container, 
	Grid, 
	TextField, 
	Button, 
	Typography 
} from '@material-ui/core';
import './Contact.css'
import {MDBAnimation} from "mdbreact";




const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
	  marginTop: theme.spacing(5),
	  padding: '0 .65em'
	
    },
    submit: {
	  margin: theme.spacing(3, 0, 3),
	  '&:hover': {
		backgroundColor: '#B3E271',
	}
	}
  }));


const Contact = () => {

    const [ firstName, setFirstName ] = useState(''),
          [ lastName, setLastName ] = useState(''),
          [ phoneNumber, setPhoneNumber ] = useState(''),
          [ userEmail, setUserEmail ] = useState(''),
		  [ message, setMessage ] = useState('');
	const contactHeading = 'Request Your Free Estimate'
	const contactSubtitle = 'Contact us now with your questions or to request a Free quote.'


  	const classes = useStyles();
  	const recaptchaRef = useRef();






  const submitInfo = async () => {


	const token = await recaptchaRef.current.executeAsync();
	// console.log(token, 'token')
	//after submitting, reCAPTCHA veryfies user again
	recaptchaRef.current.reset();

    axios.post(`${process.env.REACT_APP_API_CALL}/api/email`, {firstName, lastName, phoneNumber, userEmail, message, token }).then(() => {

        resetInfo()

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been submited',
        showConfirmButton: false,
        timer: 1500
      })
	}).catch(err => console.log(err))
  }


  const resetInfo = () => {
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setUserEmail('')
    setMessage('')
  }

    return (
        <section id='contact-container' >
					<MDBAnimation reveal type='fadeInUp'>
						<Container component="main" maxWidth="md" style={{padding: '.90em'}}>
						        	  <Typography variant="h2">{contactHeading}</Typography>
						        	    <Typography variant='subtitle1' style={{color:'#638B1D'}}>
											{contactSubtitle}
										</Typography>
						        
						        	    <form className={classes.form} 
						        	      onSubmit={e => { 
						        	        e.preventDefault()
						        	        submitInfo()
						        	      }}> 
						        	        <Grid container spacing={2}>
						        	            <Grid item xs={12} sm={6}>
						        	                <TextField
													  className='form-inputs'
						        	                  label="First Name"
						        	                  required
						        	                  fullWidth
						        	                  id="firstName"
						        	                  variant="outlined"
						        	                  value={firstName}
						        	                  onChange={e => setFirstName(e.target.value)}
						        	                />
						        	            </Grid>
						        	            <Grid item xs={12} sm={6}> 
						        	                <TextField
													  className='form-inputs'
						        	                  label="Last Name"
						        	                  required
						        	                  fullWidth
						        	                  id="lastName"
						        	                  variant="outlined"
						        	                  value={lastName}
						        	                  onChange={e => setLastName(e.target.value)}
						        	                />
						        	            </Grid>
						        	            <Grid item xs={12} sm={6}>
						        	                <TextField
													  className='form-inputs'	
						        	                  label="Phone Number"
						        	                  required
						        	                  fullWidth
						        	                  id="phoneNumber"
						        	                  variant="outlined"
						        	                  value={phoneNumber}
						        	                  onChange={e => setPhoneNumber(e.target.value)}
						        	                />
						        	            </Grid>
						        	            <Grid item xs={12} sm={6}>
						        	                <TextField
													  className='form-inputs'
						        	                  label="Email"
						        	                  type="email"
						        	                  required
						        	                  fullWidth
						        	                  id="email"
						        	                  variant="outlined"
						        	                  value={userEmail}
						        	                  onChange={e => setUserEmail(e.target.value)}
						        	                />
						        	            </Grid>
						        	            <Grid item xs={12}>
						        	                <TextField
						        	                  id="message"
						        	                  label="Message"
						        	                  placeholder="Message..."
						        	                  multiline
						        	                  rows={4}
						        	                  fullWidth
						        	                  required
						        	                  variant="outlined"
						        	                  value={message}
						        	                  onChange={e => setMessage(e.target.value)}
						        	                />
						        	            </Grid>
						        	        </Grid>
						        	        <Button
						        	          type="submit"
						        	          fullWidth
						        	          variant="contained"
						        	          color="secondary"
						        	          className={classes.submit}
						        	        >
						        	          Send
						        	        </Button>
						
											<ReCAPTCHA
											  ref={recaptchaRef}
											  size='invisible'
											  sitekey={process.env.REACT_APP_RECAPT_KEY}
											  badge='inline'
											  style={{ display: "inline-block" }}
											/>				
						        	    </form> 
						              </Container>
					</MDBAnimation>
        </section>
    )
}

export default Contact
