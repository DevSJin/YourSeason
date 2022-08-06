import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { Stack, Button, Grid, styled } from '@mui/material';

import MyAvatar from "common/avatar/MyAvatar";

import { loadMember } from 'features/auth/authSlice'

const MyProfile = () => {
  const results = useSelector(state => state.mypage.myConsultantDxData)
  const tone = results.length > 0 ? results[results.length - 1].tone : '';
  const { nickname, role } = useSelector(state => state.auth.logonUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const diagnosis = () => {
    if ( tone === '' ) {
      return <Link to="/consultants" variant="body2">진단하러 가기</Link>
    } else {
      return <Diagnosis>마지막 진단 결과: {tone}톤 입니다.</Diagnosis>
		}
	}

  const handleModify = () => {
    navigate('/modify')
    dispatch(loadMember(role)).unwrap()
      .then((res) => {
        // console.log(res)
      })
  }
	
  return (
		<Grid container>
      {/* 이미지 */}
      <Grid item xs={12} sm={3} sx={{
				display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <MyAvatar setSize={16} />
      </Grid>
      {/* 프로필  TEXT */}
      <Grid item xs={12} sm={9}>
        <ProfileText>
          <h3>{nickname} 님</h3>
          <div>{diagnosis()}</div>
          {/* 내 정보 수정 */}
            <Button variant="contained"
              onClick={handleModify}
							style={{width: 120}}
            >
              내 정보 수정
            </Button>
        </ProfileText>
      </Grid>
    </Grid>
  )
}
export default MyProfile;

const ProfileText = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  paddingLeft: "20px",
	height: "180px",
	justifyContent: "space-evenly",
})

const Diagnosis = styled('div')({
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "2",
  overflow: "hidden"
})
