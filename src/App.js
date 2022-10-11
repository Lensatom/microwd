import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Auth, Home, Login, Profile } from './pages';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
