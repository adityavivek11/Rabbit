import React from 'react';
import Leftsidebar from './Leftsidebar';

import Rightsidebar from './Rightsidebar';
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex h-screen w-full font-montserrat bg-gradient-to-br from-black via-neutral-800 to-neutral-900'>
      <Leftsidebar />
      <Outlet />
      <Rightsidebar />
    </div>
  );
};

export default Home;
