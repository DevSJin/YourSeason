import React, { useState } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import './app.css'
import Login from '../components/login/Login'
import MyPage from '../components/mypage/MyPage'
import ConsultantMyPage from '../components/consultantmypage/ConsultantMyPage'

import NavBar from '../components/common/NavBar'
import SignUp from '../components/signup/SignUp'
import { Box, Stack } from '@mui/material'
import { CUSTOMER, CONSULTANT } from '../api/CustomConst'

const App = () => {
  const { role } = useSelector((state) => state.login.logonUser)

  return (
    <Box>
      <NavBar />
      <Stack direction="column" spacing={2} justifyContent="space-between">
        <Routes>
          <Route path='/' element={<p>WelcomePage</p>} />
          <Route path='/home' element={<p>home</p>} />
          <Route path='/history' element={<p>history</p>} />
          <Route path='/mypage' element={
            role === CUSTOMER
              ? <UserMyPage /> : <ConsultantMyPage />
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Stack>
    </Box>
  )
}

export default App