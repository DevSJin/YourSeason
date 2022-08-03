import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Box, Modal, CardContent, Card, Typography, styled } from '@mui/material';
import '../mypage.css'
import ConsultantDiagnosisReview from './ConsultantDiagnosisReview';
import { myConsultantDxFetch } from 'features/mypage/mypageSlice';
// Todo. 리뷰 작성하기 버튼 활성화

// 진단결과사진 모달
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 1000,
	maxHeight: 700,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	overflow: 'scroll',
};

export const BasicModal = ({ resultImageUrl }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div style={{ display: 'flex', justifyContent: 'center', }}>
			<Button size="medieum" onClick={handleOpen} sx={{ backgroundSize: 'cover', objectFit: 'cover' }}>진단결과 자세히보기</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="span" component="h3">
						퍼스널컬러 진단결과
					</Typography>
					<img src={resultImageUrl} style={{ width: '100%' }} />
				</Box>
			</Modal>
		</div>
	);
}


const ConsultantDiagnosis = () => {
	const dispatch = useDispatch()
	const results = useSelector(state => state.mypage.myConsultantDxData);

	useEffect(() => {
		dispatch(myConsultantDxFetch())
	}, [])

	return (<>
		<Div>
			{results.map(({ consultingId, tone, consultantNickname, consultantImageUrl, consultingDate, bestColorSet, worstColorSet, resultImageUrl, comment, hasReview }, index) => (
				<div style={{ display: 'flex', justifyContent: 'center' }} key={index}>
					{/* 카드1 */}
					<Card sx={{
						textAlign: 'center', display: 'flex', justifyContent: 'center', maxWidth: 700, width: 700,
						boxSizing: 'border-box', flexDirection: "column", marginBottom: 5, padding: 1, borderRadius: 5
					}} variant="outlined" >

						{/* 진단결과 */}
						<CardContent sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: "column" }}>
							{/* 컨설턴트정보 및 코멘트 */}
							<Grid container >
								<Grid item xs={3}>
									<ConImg src={consultantImageUrl} alt="컨설턴트프로필" />
									<Typography gutterBottom variant="span" component="div">
										{consultantNickname}
										<p>컨설턴트</p>
									</Typography>
								</Grid>
								<Grid item xs={9} className="task-tooltip">{comment}</Grid>
							</Grid>
							{/* 날짜 */}
							<Forflex>
								<div></div>
								<Typography gutterBottom component="div" >
									<span>{tone} |   </span>
									{consultingDate}일
								</Typography>
							</Forflex>
							{/* 색상결과 */}
							<Pallete>
								{/* best */}
								<Grid container spacing={2} >
									<Grid item xs={3} sx={{ marginTop: 1 }}>베스트 컬러</Grid>
									<Grid item xs={9} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center', maxWidth: 200 }}>
										{bestColorSet.map(color =>
											<div style={{ background: color, width: 30, height: 30, borderRadius: 15, margin: 5 }} key={color}></div>)}
									</Grid>
								</Grid>
								{/* worst */}
								<Grid container spacing={2}>
									<Grid item xs={3} sx={{ marginTop: 1 }}>워스트 컬러</Grid>
									<Grid item xs={9} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'flex-end', maxWidth: 200 }}>
										{worstColorSet.map(color =>
											<div style={{ background: '#' + color, width: 30, height: 30, borderRadius: 15, margin: 5 }} key={color}></div>)}
									</Grid>
								</Grid>
							</Pallete>
						</CardContent>

						{/* 이미지 모달 */}
						<BasicModal resultImageUrl={resultImageUrl} />

						{/* 리뷰작성 모달 */}
						<ConsultantDiagnosisReview consultingId={consultingId} consultantNickname={consultantNickname} hasReview={hasReview} />
					</Card>
				</div>
			))}
		</Div>
	</>)
}

export default ConsultantDiagnosis


const Div = styled('div')({
	maxWidth: "700px",
	margin: "auto",
	display: "flex",
	flexDirection: "column-reverse"
})

const ConImg = styled('img')({
	width: "100px",
	height: "100px",
	borderRadius: "50%"
})

const Forflex = styled('div')({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "end",
	padding: "10px"
})

const Pallete = styled('div')({
	display: "flex",
	justifyContent: "start",
	flexDirection: "column",
	border: "1px dashed #ADBED2",
	borderRadius: "5px",
	padding: "10px",
})