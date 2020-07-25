import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, Button} from '@material-ui/core';
import axios from 'axios';
import './Contact.css'




const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


const Contact = () => {

    const classes = useStyles();

    const [ firstName, setFirstName ] = useState(''),
          [ LastName, setLastName ] = useState(''),
          [ phoneNumber, setPhoneNumber ] = useState(''),
          [ userEmail, setUserEmail ] = useState(''),
          [ message, setMessage ] = useState('');

  // console.log(firstName, LastName, phoneNumber, userEmail, message)

  const submitInfo = () => {
    axios.post('/api/email', {firstName, LastName, phoneNumber, userEmail, message }).then(() => {
      setFirstName('')
      setLastName('')
      setPhoneNumber('')
      setUserEmail('')
      setMessage('')
    })
  }

    return (
        <Container component="main" maxWidth="xs">
            <form className={classes.form} 
              onSubmit={e => { 
                e.preventDefault()
                submitInfo()
              }}> 
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                          label="Firs Name"
                          required
                          fullWidth
                          placeholder="First Name..."
                          id="firstName"
                          variant="outlined"
                          onChange={e => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}> 
                        <TextField
                          label="Last Name"
                          required
                          fullWidth
                          placeholder="Last Name..."
                          id="lastName"
                          variant="outlined"
                          onChange={e => setLastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                          label="Phone Number"
                          required
                          fullWidth
                          placeholder="Phone number..."
                          id="phoneNumber"
                          variant="outlined"
                          onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                          label="Email"
                          required
                          fullWidth
                          placeholder="Email..."
                          id="email"
                          variant="outlined"
                          onChange={e => setUserEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                          id="message"
                          label="Message"
                          required
                          placeholder="Message..."
                          fullWidth
                          variant="outlined"
                          onChange={e => setMessage(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send
                </Button>
            </form> 
      </Container>
    )
}

export default Contact
