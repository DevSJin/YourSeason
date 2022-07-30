import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from '../../api/Axios'
import {OK} from '../../api/CustomConst'

const colorset = [
	{
		spring_bright: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		spring_true: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		spring_light: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
	},
	{
		summer_light: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		summer_true: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		summer_soft: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
	},
		{autumn_soft: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		autumn_true: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		autumn_dark: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],},
		{winter_bright: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		winter_true: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],
		winter_dark: [
			'#FDF0B1',
			'#F9C5C7',
			'#B8D66A',
			'#F85C49',
			'#F44C2C',
			
			'#F17E8B',
			'#EE3A50',
			'#F16F8F',
			'#53C8E5',
			'#CB1F5F',
			
			'#0052C6',
			'#F4A518',
			'#3B8E45',
			'#8063CD',
			'#A8DDE1',
			
			'#C4B8B9',
			'#368BEA',
			'#FF9E1C',
			'#D36CAE',
			'#FEE9CF',
		],}
]

const initialState = {
	data: colorset,
	status: 'idle'
}


// get
export const ColorSetListFetch = createAsyncThunk(
	'/colorsets',
	async () => {
		return Axios.get('colorsets')
		.then(res => {
			if(res.status===OK){
				return res.data
			}else{
				alert('컬러셋 목록을 불러올 수 없습니다.')
				window.history.go(-1)
			}
		})
	}
)


const ColorSetListSlice = createSlice({
	name: 'colorsetList',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(ColorSetListFetch.pending, (state, action)=>{
			state.status = 'loading';
		})
		builder.addCase(ColorSetListFetch.fulfilled, (state, {payload})=>{
			state.status = 'succeeded';
			state.data = payload;
		})
		builder.addCase(ColorSetListFetch.rejected, (state, action)=>{
			state.status = 'failed';
		})
	}
})

export default ColorSetListSlice.reducer