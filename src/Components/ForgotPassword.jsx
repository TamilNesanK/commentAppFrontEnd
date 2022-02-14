import React , { useState ,useEffect} from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import UserService from '../Services/UserService';
const labelFont = {
    fontSize:'1.5rem'
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(4),
    },

    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 24,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function ForgotPassword(props) {
    const [state, setState] = useState({});
    const [password, setPassword] = useState("");
    const onValueChange = (event) => {
      setState({...state,  [event.target.name] : event.target.value})
  }
    
    const submit = (event) =>{
    event.preventDefault();
    UserService.showPassword(state).then(response=>{
        setPassword(response.data);
    })
    }
    return (
       
        <div className='container text-center mt-5'>
             <h2 className='SignIn'>Forgot Password</h2>
          <form onSubmit={submit}> 
        <div className='mt-3'>
            <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input" style={labelFont}>
                Email
                </InputLabel>
                <BootstrapInput required defaultValue="" id="bootstrap-input" name="emailId" style={{fontSize:'1.5rem'}} onChange={onValueChange}/>
            </FormControl>
        </div>
        <br></br>
   
        <div>
            <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input" style={labelFont}>
                Secret Code
                </InputLabel>
                <BootstrapInput required defaultValue="" id="bootstrap-input" name="secretCode"  onChange={onValueChange}/>
            </FormControl>
        </div>
        
        {password?
        <>
        <h5>Your Password is : {password}</h5> 
         <Link to="/" className='signUplink'>
        Sign In
        </Link>
        </>
        :""}
        <div className='row'>
            <div>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Forgot Password
            </Button>
        </div>     
        </div>
        </form>  
        </div>
    );
}

export default ForgotPassword;