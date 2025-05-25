import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = {
  'Serviços': [
    { title: 'Serviços', path: '/servicos' }
  ]
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, menu) => {
    setAnchorEl({
      ...anchorEl,
      [menu]: event.currentTarget
    });
  };

  const handleClose = (menu) => {
    setAnchorEl({
      ...anchorEl,
      [menu]: null
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ py: 2 }}>
      <ListItem component={Link} to="/sobre">
        <ListItemText 
          primary="Sobre Nós" 
          sx={{ 
            '& .MuiTypography-root': { 
              fontSize: '1.1rem',
              fontFamily: 'Montserrat'
            }
          }}
        />
      </ListItem>
      <ListItem component={Link} to="/servicos">
        <ListItemText 
          primary="Serviços"
          sx={{ 
            '& .MuiTypography-root': { 
              fontSize: '1.1rem',
              fontFamily: 'Montserrat'
            }
          }}
        />
      </ListItem>
      <ListItem component={Link} to="/calendario">
        <ListItemText 
          primary="Calendário Fiscal"
          sx={{ 
            '& .MuiTypography-root': { 
              fontSize: '1.1rem',
              fontFamily: 'Montserrat'
            }
          }}
        />
      </ListItem>
      <ListItem 
        component={Link} 
        to="/contactos"
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)',
          }
        }}
      >
        <ListItemText 
          primary="Contacte-nos"
          sx={{ 
            '& .MuiTypography-root': { 
              fontSize: '1.1rem',
              fontFamily: 'Montserrat',
              color: 'primary.main',
              fontWeight: 600
            }
          }}
        />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ 
      bgcolor: 'background.navbar',
      color: 'text.light'
    }}>
      <Container>
        <Toolbar sx={{ 
          minHeight: { xs: '70px', md: '80px' },
          py: { xs: 1, md: 1.5 }
        }}>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <Box
              component="img"
              src="/3.png"
              alt="Algarismo Sul Logo"
              sx={{
                height: { xs: 55, md: 60 },
                width: 'auto',
                mr: 1
              }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                sx={{ 
                  color: 'text.light',
                  '& .MuiSvgIcon-root': {
                    fontSize: '2rem'
                  }
                }}
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    bgcolor: 'background.navbar',
                    color: 'text.light',
                    minWidth: '250px'
                  }
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button 
                color="inherit" 
                component={Link} 
                to="/sobre"
                sx={{
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat',
                  px: 2,
                  py: 1
                }}
              >
                Sobre Nós
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/servicos"
                sx={{
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat',
                  px: 2,
                  py: 1
                }}
              >
                Serviços
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/calendario"
                sx={{
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat',
                  px: 2,
                  py: 1
                }}
              >
                Calendário Fiscal
              </Button>
              <Button 
                component={Link} 
                to="/contactos"
                sx={{
                  fontSize: '1.1rem',
                  fontFamily: 'Montserrat',
                  px: 2,
                  py: 1,
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
              >
                Contacte-nos
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 