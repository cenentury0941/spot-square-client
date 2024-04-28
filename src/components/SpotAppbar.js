import * as React from 'react';
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
import { Padding } from '@mui/icons-material';

const pages = ['Home', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function SpotAppbar(props) {
  const handleNavigation = props["handleNavigation"]

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" style={{height:"7vh", zIndex:"1024"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={require("../components/static/crosshair_alpha.png")} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            SPOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={"Home"} onClick={() => {handleCloseNavMenu(); handleNavigation("/")}}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>                
                <MenuItem key={"About"} onClick={() => {handleCloseNavMenu(); handleNavigation("about")}}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem key={"Sell"} onClick={() => {handleCloseNavMenu(); handleNavigation("sellerDashboard")}}>
                    <Button variant="outlined" color="secondary">
                    Sell
                    </Button>
                </MenuItem>
                <MenuItem key={"Buy"} onClick={() => {handleCloseNavMenu(); handleNavigation("search")}}>
                    <Button variant="contained" color="secondary">
                    Buy
                    </Button>
                </MenuItem>
            </Menu>
          </Box>
          <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} src={require("../components/static/crosshair_alpha.png")} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            SPOT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <div style={{marginLeft:"auto", height:"10px", backgroundColor:"red", display:"flex"}}/>
                <Button
                key={"Home"}
                onClick={() => {handleCloseNavMenu(); handleNavigation("/")}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                key={"About"}
                onClick={() => {handleCloseNavMenu(); handleNavigation("about")}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
                <Button variant="outlined" color="secondary" sx={{ my : 2 , mx : 1 }}
                onClick={() => {handleCloseNavMenu(); handleNavigation("sellerDashboard")}}>
                    Sell
                    </Button>
                <Button variant="contained" color="secondary" sx={{ my : 2 , mx : 1 }}
                onClick={() => {handleCloseNavMenu(); handleNavigation("search")}}>
                    Buy
                    </Button>
          <div style={{width:"15px", height:"10px"}}/>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
export default SpotAppbar;