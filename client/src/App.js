import { useState } from 'react';
import './App.css';
import DataProvider from './context/DataProvide.js';

import {BrowserRouter,Routes,Route,Navigate,Outlet}from 'react-router-dom';
//components
import Login from './components/account/Login.js';
import Home from './components/home/Home.js';
import Header from './components/Header.js';

const PrivateRoute = ({ isAuthenticated}) => {  
  return isAuthenticated ? 
    <>
    <Header/>
    <Outlet/>     
    </> : <Navigate replace to='/login' />
};


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (    
      <DataProvider>
        <BrowserRouter>          
          <div style={{marginTop:60}}>
            <Routes>
              <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
              <Route path='/'element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path='/' element={<Home/>}/>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>    
  );
}

export default App;
