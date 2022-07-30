import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectColor } from './colorSetSlice'

const BestColorSet = ({setIsBest}) => {
	const bestcolors = useSelector(state => state.colorSetList.bestColor)
	const dispatch = useDispatch()
	

	return (
		<div stlye={{backgroundColor: '#f5f5f5', width: '100%', height: 60}}>
			{bestcolors.map((item, index)=>(
				<div
					onClick={()=>{
						dispatch(changeSelectColor(item));
						setIsBest(true)}}
					style={{backgroundColor: item, width:50, height:50, margin:1 }}  
					key={index}>{item}</div>
		))}
		</div>
	)
}

export default BestColorSet