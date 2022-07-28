import React, { useEffect, useState } from 'react'
import ConsultantListItem from './ConsultantListItem'
import { useSelector } from 'react-redux'
import { Grid, Box, MenuItem, FormControl, Select, Pagination } from '@mui/material'

import ReactPaginate from "react-paginate";



const ConsultantList = ( {itemsPerPage} ) => {
	const consultants = useSelector(state=>state.consultantList.consultantsData)
	const [value, setValue] = useState('popular')

	const sorter = function (a, b) {
		// 오름차순 정렬
		if (value === 'popular') return b.starAverage - a.starAverage
    else if (value === 'latest') return b.consultantId -a.consultantId
    else if (value === 'highReview') return b.reviewCount -a.reviewCount
    else if (value === 'lowCost') return Number(a.cost.replace(/\,/g, '')) - Number(b.cost.replace(/\,/g, ''))
    else if (value === 'highCost') return Number(b.cost.replace(/\,/g, '')) - Number(a.cost.replace(/\,/g, ''))
  }


	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (<div style={{margin: 100}}>
		{/* select */}
			<Box sx={{ minWidth: 120, display:'flex', justifyContent:'flex-end', marginBottom: 4}}>
				<div></div>
				<FormControl>
					<Select
						labelId='select-demo'
						id='select'
						value={value}
						onChange={handleChange}
					>
						<MenuItem value={'popular'}>인기순</MenuItem>
						<MenuItem value={'latest'}>신규 가입순</MenuItem>
						<MenuItem value={'highReview'}>리뷰 많은순</MenuItem>
						<MenuItem value={'lowCost'}>낮은 가격순</MenuItem>
						<MenuItem value={'highCost'}>높은 가격순</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{/* 컨설턴트 리스트 아이템 */}
			<Grid  container sx={{ flexWrap: "wrap", direction:"row", justifyContent:"start"}} spacing={3}>
			{/* 페이지네이션 구현중.. */}
			{/* slice((pageNumber-1)*20, (pageNumber*20)-1). */}
			{/* {consultants.sort(sorter).map((consultant, index)=>(
				<Grid item xs={12} sm={6} md={3} key={index}>
						<ConsultantListItem {...consultant} /> 	
					</Grid>
			))} */}

			{consultants.sort(sorter).map((consultant, index)=>(
			<Grid item xs={12} sm={6} md={3} key={index}>
					<ConsultantListItem {...consultant} /> 	
				</Grid>
			))}
			</Grid>

		{/* <Pagination page={Number(pageNumber)} boundaryCount={2} variant="outlined" 
				onClick={paginate}
				count={10}
        color="secondary" size="large" sx={{margin: 2}} />
				 */}
	</div>)
}

export default ConsultantList