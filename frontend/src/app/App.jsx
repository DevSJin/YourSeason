import React, { useState } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import './app.css'
import NavBar from 'common/NavBar'
import Yourseason from 'features/home/YourSeason'
import Consult from 'features/consulting/consultingRoom/Consult'
import MyPage from 'features/mypage/customers/MyPage'
import ConsultantMyPage from 'features/mypage/consultants/ConsultantMyPage'
import ModifyProfile from 'features/auth/modify/ModifyProfile'
import ConsultantResPage from 'features/consulting/reservation/ConsultantResPage'
import Login from 'features/auth/login/Login'
import SignUp from 'features/auth/signup/SignUp'
import ConsultantList from 'features/consulting/consultantList/ConsultantList'
import Footer from 'common/Footer'
import TemporaryRoom from 'common/colorset/TemporaryRoom'

import { Box, Stack } from '@mui/material'
import { CUSTOMER, CONSULTANT } from '../api/CustomConst'
const App = () => {
  // const { role } = useSelector((state) => state.login.logonUser)
  // const role = CONSULTANT;
  const role = CUSTOMER;
  return (
    <Box >
      <NavBar />
      <Stack direction="column" spacing={2} justifyContent="space-between" sx={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<p>WelcomePage</p>} />
          <Route path='/home' element={<Yourseason />} />
          <Route path='/consult' element={<Consult />} />
          <Route path='/consultants' element={<ConsultantList />} />
          <Route path='/mypage' element={
            role === CUSTOMER
              ? <MyPage /> : <ConsultantMyPage />
          } />
          <Route path='/respage' element={<ConsultantResPage />} />
          <Route path='/modify' element={<ModifyProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/colorset' element={<TemporaryRoom />} />
        </Routes>
      </Stack>
      <Footer />
    </Box>
  )
}

export default App
