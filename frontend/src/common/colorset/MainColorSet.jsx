import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, styled, Tab, TextField, MenuItem, Button } from '@mui/material'

import { TabContext, TabList, TabPanel } from '@mui/lab';
import ColorPaletteBox from './PaletteBox'
import Drawing from 'common/drawing/Drawing';
import { changeComment, selectTone, setFiles } from './colorSetSlice';



const MainColorSet = () => {
  const dispatch = useDispatch()
  const comment = useSelector(state => state.colorSetList.comment)
  const selectedTone = useSelector(state => state.colorSetList.tone)
  const files = useSelector(state => state.colorSetList.files)
  const [
    { spring_bright, spring_true, spring_light },
    { summer_light, summer_true, summer_soft },
    { autumn_soft, autumn_true, autumn_dark },
    { winter_bright, winter_true, winter_dark }
  ] = useSelector(state => state.colorSetList.data)
  const tone = [
    '',
    '봄 브라이트', '봄 트루', '봄 라이트',
    '여름 라이트', '여름 트루', '여름 소프트',
    '가을 소프트', '가을 트루', '가을 다크',
    '겨울 브라이트', '겨울 트루', '겨울 다크',
  ]
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSubValue("1");
  };

  const [subValue, setSubValue] = useState("1");
  const handleSubChange = (event, newValue) => {
    setSubValue(newValue);
  };

  const [isDrawing, setIsDrwaing] = useState(true)

  const onLodaFile = (event) => {
    const file = event.target.files
    dispatch(setFiles(file))
  }

  return (
    <SGrid item xs={12}>
      <TabContext value={value} sx={{ height: '100%' }}>
        <Box sx={{ borderBottom: 'divider' }}>
          <TabList onChange={handleChange} sx={{ borderBottom: 'divider' }}>
            <Tab label="봄" value={"1"} onClick={() => { setIsDrwaing(true) }} />
            <Tab label="여름" value={"2"} onClick={() => { setIsDrwaing(true) }} />
            <Tab label="가을" value={"3"} onClick={() => { setIsDrwaing(true) }} />
            <Tab label="겨울" value={"4"} onClick={() => { setIsDrwaing(true) }} />
            <Tab label="진단결과" value={"5"} onClick={() => { setIsDrwaing(false) }} />
          </TabList>
        </Box>
        <CTabPanel value={"1"}>
          <TabContext value={subValue} sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', padding: '0' }}>
              <CTabPanel value={"1"}>
                <ColorPaletteBox colorSet={spring_bright} />
              </CTabPanel>
              <CTabPanel value={"2"}>
                <ColorPaletteBox colorSet={spring_true} />
              </CTabPanel>
              <CTabPanel value={"3"}>
                <ColorPaletteBox colorSet={spring_light} />
              </CTabPanel>
              <TabList
                orientation="vertical"
                onChange={handleSubChange}
                sx={{ borderLeft: 1, borderColor: 'divider', width: '25%' }}>
                <CTab label="브라이트" value={"1"} />
                <CTab label="트루" value={"2"} />
                <CTab label="라이트" value={"3"} />
              </TabList>
            </Box>
          </TabContext>
        </CTabPanel>
        <CTabPanel value={"2"}>
          <TabContext value={subValue}>
            <Box sx={{ display: 'flex' }}>
              <CTabPanel value={"1"}>
                <ColorPaletteBox colorSet={summer_light} />
              </CTabPanel>
              <CTabPanel value={"2"}>
                <ColorPaletteBox colorSet={summer_true} />
              </CTabPanel>
              <CTabPanel value={"3"}>
                <ColorPaletteBox colorSet={summer_soft} />
              </CTabPanel>
              <TabList
                orientation="vertical"
                onChange={handleSubChange}
                sx={{ borderLeft: 1, borderColor: 'divider', width: '25%' }}>
                <CTab label="라이트" value={"1"} />
                <CTab label="트루" value={"2"} />
                <CTab label="소프트" value={"3"} />
              </TabList>
            </Box>
          </TabContext>
        </CTabPanel>
        <CTabPanel value={"3"}>
          <TabContext value={subValue} sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex' }}>
              <CTabPanel value={"1"}>
                <ColorPaletteBox colorSet={autumn_soft} />
              </CTabPanel>
              <CTabPanel value={"2"}>
                <ColorPaletteBox colorSet={autumn_true} />
              </CTabPanel>
              <CTabPanel value={"3"}>
                <ColorPaletteBox colorSet={autumn_dark} />
              </CTabPanel>
              <TabList
                orientation="vertical"
                onChange={handleSubChange}
                sx={{ borderLeft: 1, borderColor: 'divider', width: '25%' }}>
                <CTab label="소프트" value={"1"} />
                <CTab label="트루" value={"2"} />
                <CTab label="다크" value={"3"} />
              </TabList>
            </Box>
          </TabContext>
        </CTabPanel>
        <CTabPanel value={"4"}>
          <TabContext value={subValue} sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex' }}>
              <CTabPanel value={"1"}>
                <ColorPaletteBox colorSet={winter_bright} />
              </CTabPanel>
              <CTabPanel value={"2"}>
                <ColorPaletteBox colorSet={winter_true} />
              </CTabPanel>
              <CTabPanel value={"3"}>
                <ColorPaletteBox colorSet={winter_dark} />
              </CTabPanel>
              <TabList
                orientation="vertical"
                onChange={handleSubChange}
                sx={{ borderLeft: 1, borderColor: 'divider', width: '25%' }}>
                <CTab label="브라이트" value={"1"} />
                <CTab label="트루" value={"2"} />
                <CTab label="다크" value={"3"} />
              </TabList>
            </Box>
          </TabContext>
        </CTabPanel>
        <CTabPanel value={"5"}>
          <TabContext value={subValue} sx={{ height: '100%', width: '100%' }}>
            진단결과
            <TextField
              size='small'
              label="코멘트"
              name="request"
              margin="normal"
              value={comment}
              onChange={(e) => { dispatch(changeComment(e.target.value)) }}
              multiline
              rows={1}
              autoComplete="request"
              autoFocus
              required
              fullWidth
              helperText="진단 결과에 대한 컨설턴트님의 의견을 남겨주십시오" />
            <TextField
              id="tone-select"
              select
              label='톤 결과'
              size='small'
              value={selectedTone}
              onChange={(e) => { dispatch(selectTone(e.target.value)) }}
              helperText="내담자의 톤 결과를 골라주세요">
              {tone.map((tone, idx) => (
                <MenuItem key={idx} value={tone}>
                  {tone}
                </MenuItem>
              ))}
            </TextField>
            <div>
              <Button variant="contained" component="label">
                진단표 업로드하기
                <input hidden accept="image/*" multiple type="file" onChange={onLodaFile} />
              </Button>
              {files ? ` ${files[0].name}` : ' 등록된 이미지가 없습니다'}
            </div>
          </TabContext>
        </CTabPanel>
      </TabContext>
      {isDrawing ? <Drawing /> : null}
    </SGrid>

  )
}

export default MainColorSet

const SGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const CTab = styled(Tab)({
  padding: "0px",
  minHeight: "24px",
  height: "24px"
})

const CTabPanel = styled(TabPanel)({
  padding: "0px",
})
