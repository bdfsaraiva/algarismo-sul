import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  height: '100%',
  minHeight: 350,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'perspective(1000px) rotateX(0) rotateY(0)',
  '&:hover': {
    transform: 'perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(-8px)',
    boxShadow: '0 22px 45px rgba(0, 34, 80, 0.1)',
    '&::before': {
      opacity: 1,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,34,80,0.05) 0%, rgba(0,34,80,0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 1,
    borderRadius: theme.shape.borderRadius,
  },
}));

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <StyledPaper elevation={3}>
      <Box sx={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {Icon && (
          <Box sx={{ mb: 3, color: 'primary.main' }}>
            <Icon sx={{ fontSize: 56 }} />
          </Box>
        )}
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontFamily: 'Cormorant Garamond',
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
            fontSize: '1.75rem'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1"
          sx={{ 
            fontFamily: 'Red Hat Display',
            color: 'text.secondary',
            fontSize: '1rem',
            lineHeight: 1.6,
            flex: 1
          }}
        >
          {description}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default ServiceCard; 