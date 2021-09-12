import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
    },
}));

const SignUp = () => {
    const classes = useStyles();
    let history = useHistory();

    function RedirectUserToHomePage() {
        history.push("/");
    }
    const [userDetails, SetUserDetails]=useState({});
    
    function UpdateUserInput(e){
        let target = e.target.name;
        let value = e.target.value;
        SetUserDetails({
            ...userDetails,
            [target]: value
        });

        console.log(userDetails)
    }

    function SignUpUser (e){
        e.preventDefault()

        fetch('http://localhost:4000/api/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                localStorage.setItem('usertoken', data.token);
                RedirectUserToHomePage()
                // setTimeout(function(){
                //     RedirectUserToHomePage();
                // },3000);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
       
    return (
        <div className='page-width '>
            <div>

                <div className='form'>
                    <div>
                        <h1 className='form-title'>Sign Up</h1>
                    </div>
                    <form  className={classes.root} noValidate autoComplete="off">
                        <div>
                            <div >
                                <TextField name="email" onChange={(e) => { UpdateUserInput(e) }} id="standard-basic" fullWidth label="Email" />
                            </div>
                            <div >
                                <TextField name="username" onChange={(e) => { UpdateUserInput(e) }} id="standard-basic"  fullWidth label="username" />
                            </div>

                            <div >
                                <TextField name ="password" onChange={(e) => { UpdateUserInput(e)}} id="standard-basic" type='password' fullWidth label="Password" />
                            </div>

                            <div >
                                <TextField name="age" onChange={(e) => { UpdateUserInput(e) }} id="standard-basic" fullWidth label="Age" />
                            </div>
                            <div >
                                <TextField name="phone__number" onChange={(e) => { UpdateUserInput(e)}} id="standard-basic" fullWidth label="Phone number" />
                            </div>
                  
                        </div>
                        <Button onClick={SignUpUser}  variant="contained" color="primary" disableElevation>
                            Sign Up
                        </Button>
                        <div>
                            <div className='text-center'>Already have and account ?<Link to="/login">login</Link></div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp;