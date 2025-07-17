import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Loginpage from './screen/Loginpage'
import Signuppage from './screen/signuppage'
const App = () => {
  return (
    <div>

 {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default App



