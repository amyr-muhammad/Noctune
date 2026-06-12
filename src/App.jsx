import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DashBoard from './pages/dashbord';


function App() {


  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/dashboard' element= {<DashBoard/>} />
      </Routes>
    </>
  )
}

export default App
