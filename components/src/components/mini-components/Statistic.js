import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link, Typography, Box, Paper }from '@mui/material'
import ModalWindow from './ModalWindow'


import dayjs from 'dayjs'

// const basePageArguments = {
// 	title: 'Title',
// 	statistic: 'Statistic',
// 	expand: 'Expand Text',
// 	href: '/link',
// 	onClick: () => console.log('click'),
// 	paper: {
// 		elevation: 5,
// 		padding: 2, 
// 		height: { sm: '20vh', md: '15vh' },
// 		width: '25%',
//         borderRadius: '15px'
// 	}
// }

export default function Statistic({details }) {
	const {title, statistic, expand, href, Modal, paper, type, modalArgs} = details

	const [open, setOpen] = useState(false)

	const navigate = useNavigate()

	if(type === 'modal'){
		modalArgs.open = open
		modalArgs.setOpen = setOpen
	}

	function onClick(event) {
		if(type === 'href'){
			navigate(href)
		}
		if(type === 'modal'){
			modalArgs.setOpen(true)
		} 
	}





	return (
		<Paper
							elevation={paper.elevation}
							sx={paper}
						>
							{type === 'modal' ? <ModalWindow details={modalArgs}/> : null}
					
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%'
				}}
				>
				
			
				<div>
					<Typography
						textAlign="center"
						component="h2"
						color="primary"
						gutterBottom
						sx={{ typography: { md: "h6", lg: "h5", xl: "h4" } }}
						>
						{title}
					</Typography>

					<Typography color="primary" textAlign="center" component="p" sx={{ typography: { md: "h4", lg: "h3", xl: "h3" } }}>
						{statistic}
					</Typography>
				</div>
				<Box>
					<Link
						color="secondary"
						href={href}
						onClick={() => onClick()}
						sx={{cursor: "pointer"}}
						>
						{expand}
					</Link>
				</Box>
			</Box>
						</Paper>
	
	)
}
