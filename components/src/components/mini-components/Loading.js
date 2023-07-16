import * as React from 'react'
import { Box, CircularProgress } from '@mui/material'
import logo from '../images/vsl-logo.png'

const loadLogo =  
	<Box
	component="img"
	sx={{
	  height: 150,
	 justifySelf: 'center',
	 alignSelf: 'center',
	  maxHeight: { xs: 150 },
  
	  mb: 5
	}}
	alt="Vanguard Sevices Limited Logo"
	src={logo}
  />


export default function Loading() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					flexDirection: 'column',
				}}
			>
				{loadLogo}

				<CircularProgress size="150px" color="primary" />
			</Box>
		</>
	)
}
