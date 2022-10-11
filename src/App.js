import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Auth, Home, List, Login, Pending, Profile, Streaming } from './pages';
import Dash from './pages/admin/Dash';
import Index from './pages/admin/Home';

function App() {

  const changeMode = () => {};

  return (
    <div className={`h-screen w-full`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile' element={<Profile changeMode={changeMode}/>} />
          <Route path='/admin' element={<Index />}>
            <Route path='' element={<Dash />} />
            <Route path='pending' element={<Pending />} />
            <Route path='attendances' element={<Streaming />} />
            <Route path='attendances/list' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
