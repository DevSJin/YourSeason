import React from 'react'
import { Grid, styled } from '@mui/material'
import MainColorSet from './MainColorSet'

const ColorPalette = ({
	setIsBest,
	setIsWorst
}) => {
	return (
		<SGrid item xs={12} sm={4}>
			<MainColorSet setIsBest={setIsBest} setIsWorst={setIsWorst} />
		</SGrid>
	)
}

export default ColorPalette

ColorPalette.defaultProps = {
	setIsBest: () => { },
	setIsWorst: () => { }
}

const SGrid = styled(Grid)({
	width: '100%',
	height: '100%',
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center"
})