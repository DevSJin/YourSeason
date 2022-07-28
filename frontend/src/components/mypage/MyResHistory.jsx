import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { styled } from '@mui/material';
import MyResHistoryItem from './MyResHistoryItem'
// Todo.
// 요청사항 수정버튼, 예약 취소버튼 기능 구현 
// isActive false일때 버튼 hidden 적용하기
// 날짜부분 추후 다시 스타일 적용

const MyResHistory = () => {
  const reservations = useSelector(state => state.customerMyPage.myResData);


  return (
    <Div>
      {reservations.map((reservation, index) => (
        <MyResHistoryItem {...reservation} key={index} />
      ))}
    </Div>
  )
}

export default MyResHistory

const Div = styled('div')`
	max-width:700px;
	margin:auto;
	display:flex;
	flex-direction: column-reverse;
`

// const Line = styled.div`
// 	border-top: 1px dashed #ADBED2;
// 	margin-top: -20px;
// 	margin-bottom: 20px;
// `
