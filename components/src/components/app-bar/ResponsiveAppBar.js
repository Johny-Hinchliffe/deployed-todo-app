import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import SearchBar from '../mini-components/SearchBar'

const details = {
    pages: ['Products', 'Pricing', 'Blog'],
    settings: ['Profile', 'Account', 'Dashboard', 'Logout'],
    logo: 'LOGO',
    avatarAlt: 'Dm',
    avatarSource: '../../images/vsl-logo-png',
    data: [{data:'hi'}, {data1: 'there'}, {data2:'penis'}],
    onPagesClick: (page) => {
       if(page === 'Products'){
        console.log('You clicked products')
       } else if(page === 'Pricing'){
        console.log('You clicked pricing')
       } else if(page === 'Blog'){
        console.log('You clicked blog')
       } 
    },
    onSettingsClick: (setting) => {
        if(setting === 'Profile'){
         console.log('You clicked profile')
        } else if(setting === 'Account'){
         console.log('You clicked account')
        } else if(setting === 'Dashboard'){
         console.log('You clicked dashboard')
        } else if(setting === 'Logout'){
            console.log('You clicked logout')
           } 
     },
}



function ResponsiveAppBar({search, setSearch}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
 

  const {pages, settings, logo, avatarAlt, avatarSource, data, onPagesClick, onSettingsClick} = details

  useEffect(() => {
    console.log(search)
  },[search])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    //position="fixed"
    <AppBar color="primary" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {logo}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => {
                handleOpenNavMenu(event)
            }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={(event) => {
                handleCloseNavMenu(event)
            }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(event) => { 
                    onPagesClick(page)
                    handleCloseNavMenu(event)}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {logo}
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event) => {
                    onPagesClick(page)
                    handleCloseNavMenu(event)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            <Box sx={{display: { xs: 'none', sm: 'flex', md: 'flex' } }}>

          <SearchBar setSearch={setSearch} data={data}/>
            </Box>

          <Box sx={{ flexGrow: 0, ml: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={avatarAlt} src={avatarSource} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={(event) => {
                    onSettingsClick(setting)
                    handleCloseUserMenu(event)
                }
                }>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
