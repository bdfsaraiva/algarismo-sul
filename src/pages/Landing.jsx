import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Landing = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: '#FFFFFF',
          color: 'primary.main',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              component="img"
              src="/12.png"
              alt="Algarismo Sul Logo"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Algarismo Sul
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
              }}
            >
              Website em desenvolvimento
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing; 