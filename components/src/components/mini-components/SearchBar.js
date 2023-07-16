import {useState, useEffect} from 'react'
import {InputBase, Box, styled, alpha} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

const searchFilter = (event, data) => {
  const results = data.filter((obj) => {
    if (
      Object.values(obj).filter((el) => {
        return String(el).toLowerCase().includes(event.toLowerCase())
      }).length > 0
    ) {
      return true
    }
  })
  return results
}

const SearchBar = ({setSearch, data, display}) => {
    return (
		<Box sx={{display: display}}>

        <Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
						onChange={(searchVal) =>{
							console.log(searchVal.target.value, data)
							setSearch(searchFilter(searchVal.target.value, data))
						}}
						/>
				</Search>
						</Box>
    )
}

export default SearchBar