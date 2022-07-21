import React, { useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
} from '@mui/material'

import ValidationInput from '../input/ValidationInput'
import ComparePasswordInput from '../input/ConfirmPasswordInput'
import ConfirmValidationInput from '../input/ConfirmValidationInput'
import PhoneNumberInput from '../input/PhoneNumberInput'
import BirthSelectInput from '../input/BirthSelectInput'
import RoleSelectBox from '../input/RoleSelectBox'
import Policy from './Policy'

import regex from '../input/regex';

const SignUp = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [isNicknameCheck, setIsNicknameCheck] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('010');

  const date = new Date();
  let today = (date.getFullYear()) + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '-' + ('0' + date.getDate()).slice(-2);
  let beforeTw = (date.getFullYear() - 20) + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '-' + ('0' + date.getDate()).slice(-2);
  const [birth, setBirth] = useState(beforeTw);


  const userInfo = {
    email: userEmail,
    password: password,
    nickname: nickname,
    phone: phoneNumber,
    birth: birth,
  }


  const [agreeChecked, setAgreeChcked] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
  }

  return (
    <Container sx={{ xs: 'none', sm: 'block' }}>
      <Avatar sx={{
        m: "1rem auto", bgcolor: 'secondary.main'
      }} />
      <CssBaseline />
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid container item xs={12} sx={{}}>
          <Grid item xs={12} sm={6} p={1} >
            <ConfirmValidationInput
              autofocus
              label="이메일"
              id="email"
              value={userEmail}
              setValue={setUserEmail}
              isCheck={isEmailCheck}
              setIsCheck={setIsEmailCheck}
              handleValueCheck={() => {
                alert("인증완료");
                setIsEmailCheck(true);
              }}
              regexCheck={regex.email}
              defaultText="이메일을 입력해주세요."
              successText="success"
              errorText="이메일 양식을 맞춰주세요."
            />

            <ValidationInput
              label="패스워드"
              type="password"
              value={password}
              setValue={setPassword}
              regexCheck={regex.password}
              maxValue={20}
              defaultText="비밀번호를 입력해주세요."
              successText="success"
              errorText="소문자, 특수문자, 8~20글자 이상"
            />

            <ComparePasswordInput
              label="패스워드 재확인"
              type="password"
              value={rePassword}
              setValue={setRePassword}
              compareValue={password}
              maxValue={20}
              defaultText="비밀번호를 다시한번 입력해주세요."
              incorrectText="비밀번호가 일치하지 않습니다."
              successText="success"
              errorText="소문자, 특수문자, 8~20글자 이상"
            />

            <ConfirmValidationInput
              autofocus
              label="닉네임"
              value={nickname}
              setValue={setNickname}
              isCheck={isNicknameCheck}
              setIsCheck={setIsNicknameCheck}
              handleValueCheck={() => {
                alert("인증완료");
                setIsNicknameCheck(true);
              }}
              regexCheck={regex.nickname}
              defaultText="닉네임을 입력해주세요."
              successText="success"
              errorText="닉네임 양식을 맞춰주세요."
            />
          </Grid>
          <Grid item xs={12} sm={6} p={1} >
            <PhoneNumberInput
              label="전화번호"
              type="text"
              value={phoneNumber}
              setValue={setPhoneNumber}
              maxValue={13}
              regexCheck={regex.phone}
              defaultText="전화번호를 입력해주세요."
              successText="success"
              errorText="올바른 전화번호를 입력해주세요."
            />

            <BirthSelectInput
              label="생년월일"
              type="date"
              value={birth}
              setValue={setBirth}
              maxValue={today}
              defaultText="생일을 선택해주세요."
              successText="success"
              errorText="올바른 생년월일을 선택해주세요."
            />
            <RoleSelectBox
              label="사용자 유형" />

          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <Policy />
          <FormControlLabel
            control={<Checkbox value={agreeChecked}
              onChange={e => { setAgreeChcked(e.target.value) }} color="primary" />}
            label="회원가입 약관에 동의합니다."
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => { handleSubmit(userInfo) }}
            sx={{ mt: 3, mb: 2, minWidth: 400, maxWidth: 600 }}
            size="large"
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </Container >
  )
}

export default SignUp