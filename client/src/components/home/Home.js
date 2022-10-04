import React from 'react'


//components
import Title from '../Title';
import Linkform from '../Linkform';
import Links from '../Links';

const Home = () => {
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