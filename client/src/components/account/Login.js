import React,{useState,useContext} from 'react'
import {Box,TextField,Button,styled,Typography} from '@mui/material';
import{API} from '../../service/api.js'
import { DataContext } from '../../context/DataProvide.js'
import { useNavigate } from 'react-router-dom';


const Component = styled(Box)`
  width:400px;
  margin:auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6)
  `;

const Wrapper = styled(Box)`
  padding:25px 35px;
  display:flex;
  flex:1;
  flex-direction:column;
  & > div,& > button,& > p{
    margin-top:20px;
  }
`;
const Loginheader = styled("h1")`
  text-align:center;
  color: #2c3e50;
  font-weight:400;
  padding-top:40px;

`;
const LoginButton = styled(Button)`
  background:#2c3e50;
  color:#fff;
  height:40px;
  border-radius:2px;
`;
const SignupButton = styled(Button)`
  background:#fff;
  color:#2c3e50;
  height:40px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color:#878787;
  font-size:14px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const signupInitialValue ={
  name:"",
  number:"",
  password:""
}
const loginpInitialValue ={
  number:"",
  password:""
}

const Login = ({isUserAuthenticated}) => {

  const [account,toggleAccount] = useState('login');
  const[signup, setSignup]=useState(signupInitialValue);
  const [login,setLogin]=useState(loginpInitialValue);
  const [error, showError] = useState('');
  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();
  const toggleSignup = ()=>{
    account === 'signup' ? toggleAccount('login'):toggleAccount('signup');
  }

  const onInputChange=(e)=>{
    setSignup({ ...signup,[e.target.name]:e.target.value});
  }

  const signupUser =async()=>{
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError('');
      setSignup(signupInitialValue);
      toggleAccount('login');
  } else {
      showError('Something went wrong! please try again later');
  }
}
  const onValueChange =(e)=>{
    setLogin({ ...login,[e.target.name]:e.target.value});
  }
  const loginUser=async()=>{
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      showError('');
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
      setAccount({ name: response.data.name, number: response.data.number });
      isUserAuthenticated(true);
      navigate('/');
    }else{
      showError('Something went wrong! please try again later');
    }
  }

  return (
    <Component>
      {
        account ==='login' ?
        <Box>
        <Loginheader>Login</Loginheader>
        <Wrapper>
          <TextField variant="standard" value={login.number} onChange={(e)=>onValueChange(e)} name="number" label="Enter Phone Number"/>
          <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name="password" label="Enter Password"/> 
          {error && <Error>{error}</Error>}
          <LoginButton variant='contained' onClick={()=>loginUser()}>Login</LoginButton>
          <Text style={{textAlign:'center'}}>OR</Text>
          <SignupButton onClick={()=>toggleSignup()}>Create an account</SignupButton> 
        </Wrapper>
        </Box>
        :
        <Box>
        <Loginheader>Signup</Loginheader>
        <Wrapper>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="name"label="Enter Name"/>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)}name="number" label="Enter Phone Number"/>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password"/> 
          {error && <Error>{error}</Error>}
          <SignupButton onClick={()=> signupUser()}>Signup</SignupButton> 
          <Text style={{textAlign:'center'}}>OR</Text>        
          <LoginButton variant='contained' onClick={()=>toggleSignup()}>Already have an account</LoginButton>
        </Wrapper>
        </Box>
      }
    </Component>

  )
}

export default Login