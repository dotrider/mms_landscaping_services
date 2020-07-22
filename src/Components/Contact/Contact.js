import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form> 
                <TextField
                label="Firs Name"
                id="outlined-margin-dense"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                />
                <TextField
                label="Last Name"
                id="outlined-margin-normal"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                />
                <TextField
                label="Phone Number"
                id="outlined-margin-none"
                className={classes.textField}
                variant="outlined"
                />
                <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
            </form> 
        </div>
    )
}

export default Contact
