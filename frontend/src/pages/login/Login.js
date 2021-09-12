import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Loader from "react-loader-spinner";
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

    const dispatch = useDispatch();
    const classes = useStyles();
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, SetPassword]=useState('');
    const [error,setError]=useState('');
    const [loader,setLoaderState]=useState(false);
    function RedirectUserToHomePage() {
        history.push("/");
    }
    const LoginUser =()=>{
   
        const data = { username, password};

        fetch('http://localhost:4000/api/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response =>{
                 response.json()
                setLoaderState(!loader);
                }).then(data => {
                console.log('Success:', data);
                if (data.token){
                    localStorage.setItem('auth', true);
                    localStorage.setItem('usertoken', data.token);
                    dispatch({ type: 'Set_User_Auth' });
                    
                    setTimeout(function(){
                    RedirectUserToHomePage();
                    setLoaderState(!loader)
                    },3000);
                }
                setError(data.message)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    

    return(
        <div className='page-width '>
            <div>
 
                <div className='form'>
                    <p className="error-message">{error}</p>
                    <div>
                        <h1 className='form-title'>Login</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <div >
                                <TextField onChange={(e) => { setUsername(e.target.value)}} id="standard-basic" fullWidth label="username or email" />
                            </div>
                            <div >
                                <TextField onChange={(e) => { SetPassword(e.target.value) }} id="standard-basic" fullWidth label="Password" />
                            </div>

                        </div>
                        <Button onClick={LoginUser} variant="contained" color="primary" disableElevation>
                            Login
                        </Button>
                    </form>
                    <div className="loader">
                        {loader?(
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            // timeout={3000} //3 secs
                            />
                        ):''}
  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login ;