import React from 'react'
// import {TextField,Box,styled,Button} from '@mui/material';
// import { API } from '../../service/api.js';
// import { DataContext } from '../../context/DataProvide.js'
//components
import Title from '../Title';
import Linkform from '../Linkform';
import Links from '../Links';


// const Component = styled(Box)`
//   width:400px;
//   margin:auto;
//   box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6)
//   `;
// const Wrapper = styled(Box)`
//   padding:25px 35px;
//   display:flex;
//   flex:1;
//   flex-direction:column;
//   & > div,& > button,& > p{
//     margin-top:20px;
//   }`;
//   const OtpButton = styled(Button)`
//   background:#2c3e50;
//   color:#fff;
//   height:40px;
//   border-radius:2px;
// `;
const Home = () => {  
  // const[isverified,setIsverified]= useState("false")
  // const toggleOtp = ()=>{
  //   setIsverified('true');
  // }
  // const[otp,setOtp]=useState([]);
  // const { setAccount } = useContext(DataContext);
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     let response = await API.getAllDetails();
  //     if(response.isSuccess){
  //       setOtp(response.data);
  //       setAccount({ name: response.data.name, number: response.data.number });
  //     }
  //   }
  //   fetchData();
  // },[])
  return (   
    <>   
    <Title/>
    <div className='App-bottom'>
    <Linkform/>
    <Links/>
    </div>
    </>
  )
}


export default Home


{/* {
  isverified === 'false' ?
  <Component>
  <Wrapper>
  <h1>Number is not verified</h1>   
  <TextField variant="standard" label="Enter Otp"/>
  <OtpButton variant='contained'onClick={()=>toggleOtp()}>Enter OTP</OtpButton>
  </Wrapper>
  </Component>
  :
  <>
  <Title/>
  <div className='App-bottom'>
  <Linkform/>
  <Links/>
  </div>
  </>
} */}