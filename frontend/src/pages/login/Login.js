import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './login.css'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            
        },
    },
}));

const Login =()=>{
    const classes = useStyles();
    return(
        <div className='page-width '>
            <div className='form'>
                <form className={classes.root} noValidate autoComplete="off">
                   <div>
                        <div >
                            <TextField id="standard-basic" fullWidth label="username or email" />
                        </div>
                        <div >
                            <TextField id="standard-basic" fullWidth label="Password" />
                        </div>

                   </div>

                </form>
            </div>

        </div>
    )
}

export default Login ;