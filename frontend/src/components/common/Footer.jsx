import React from 'react'
import { Box, Container, styled } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "#F2DEE960",
      marginTop: "3rem"
    }}>
      <FooterContainer>
        <small>&copy; 당신의 계절 | 치명적인 당신</small>
      </FooterContainer>
    </Box>
  )
}

export default Footer

const FooterContainer = styled(Container)({
  padding: "2rem 0",
  textAlign: "center",
  fontSize: "1.2rem",
})