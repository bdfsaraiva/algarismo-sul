import React from 'react';
import { Box, Container, Grid, Typography, Link, Paper, Menu, MenuItem, Button } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';

const GoogleMap = () => {
  return (
    <Box component="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.7076247905387!2d-9.161543224378615!3d38.67559787152755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934a82c2b3965%3A0x45a19efde0f98311!2sR.%20Dom%20Jo%C3%A3o%20de%20Castro%2084%2C%20Almada!5e0!3m2!1spt-PT!2spt!4v1710799027252!5m2!1spt-PT!2spt"
      sx={{
        border: 0,
        width: '100%',
        height: '250px',
        borderRadius: 1,
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

const externalLinks = {
  'Finanças e Autoridades Fiscais': [
    { title: 'Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt' },
    { title: 'e-fatura', url: 'https://faturas.portaldasfinancas.gov.pt' },
    { title: 'Segurança Social Direta', url: 'https://www.seg-social.pt' }
  ],
  'Contabilidade e Legislação': [
    { title: 'OCC', url: 'https://www.occ.pt' },
    { title: 'Diário da República', url: 'https://dre.pt' },
    { title: 'Inforfisco', url: 'https://www.inforfisco.pt' }
  ],
  'Empresas e Negócios': [
    { title: 'Portal da Empresa', url: 'https://eportugal.gov.pt/empresas' },
    { title: 'IRN', url: 'https://www.irn.mj.pt' },
    { title: 'Banco de Portugal', url: 'https://www.bportugal.pt' }
  ]
};

const Footer = () => {
  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, category) => {
    setAnchorEl({
      ...anchorEl,
      [category]: event.currentTarget
    });
  };

  const handleClose = (category) => {
    setAnchorEl({
      ...anchorEl,
      [category]: null
    });
  };

  return (
    <Box sx={{ 
      bgcolor: 'background.footer', 
      color: 'text.light', 
      py: 8, 
      mt: 'auto' 
    }}>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={8} 
          justifyContent="space-between"
          sx={{ mb: 6 }}
        >
          {/* Links Úteis */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ 
                pb: 2, 
                borderBottom: '2px solid', 
                borderColor: 'text.light',
                color: 'text.light'
              }}>
                Links Úteis
              </Typography>
              {Object.entries(externalLinks).map(([category, links]) => (
                <Box key={category}>
                  <Button
                    sx={{
                      color: 'text.light',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      p: 0,
                      fontSize: '1rem',
                      fontFamily: 'Red Hat Display',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }
                    }}
                    onClick={(e) => handleClick(e, category)}
                    endIcon={<KeyboardArrowDown />}
                  >
                    {category}
                  </Button>
                  <Menu
                    anchorEl={anchorEl[category]}
                    open={Boolean(anchorEl[category])}
                    onClose={() => handleClose(category)}
                    PaperProps={{
                      sx: {
                        bgcolor: 'background.footer',
                        color: 'text.light',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                      }
                    }}
                  >
                    {links.map((link) => (
                      <MenuItem 
                        key={link.title}
                        onClick={() => handleClose(category)}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontSize: '1rem',
                          fontFamily: 'Red Hat Display',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.1)'
                          }
                        }}
                      >
                        {link.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Calendário e Contactos */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ 
                pb: 2, 
                borderBottom: '2px solid', 
                borderColor: 'text.light',
                color: 'text.light'
              }}>
                Contactos
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: 'text.light' }} />
                <Typography color="text.light">+351 911 750 592</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: 'text.light' }} />
                <Typography color="text.light">geral@algarimosul.pt</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: 'text.light' }} />
                <Typography color="text.light">
                  Rua Dom João de Castro, 84 - Loja C<br />
                  Almada
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTime sx={{ color: 'text.light' }} />
                <Typography color="text.light">
                  Segunda a Sexta<br />
                  9:00 - 18:00
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Localização */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ 
                pb: 2, 
                borderBottom: '2px solid', 
                borderColor: 'text.light',
                color: 'text.light'
              }}>
                Localização
              </Typography>
              <GoogleMap />
            </Box>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 4,
            textAlign: 'center',
            color: 'text.light'
          }}
        >
          <Typography variant="body2" color="text.light">
            © {new Date().getFullYear()} Algarismo Sul. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 