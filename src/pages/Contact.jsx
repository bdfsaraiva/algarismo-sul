import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button,
  Card,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:geral@algarimosul.pt?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Mensagem:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSnackbar({
        open: true,
        message: 'A abrir o seu cliente de email...',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Erro ao tentar abrir o cliente de email. Por favor, tente novamente.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 12 } }}>
      <Container maxWidth="md">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontFamily: 'Cormorant Garamond',
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Contacte-nos
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontFamily: 'Montserrat',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}
          >
            Envie-nos a sua mensagem e entraremos em contacto consigo o mais brevemente possível.
          </Typography>
        </Box>

        <Card sx={{ p: { xs: 3, md: 6 } }}>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Assunto"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={12}
                required
                variant="outlined"
                sx={{
                  mb: 4,
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    height: '300px',
                    alignItems: 'flex-start'
                  }
                }}
              />
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                width: '100%'
              }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 6,
                    fontSize: '1.1rem',
                    fontFamily: 'Montserrat',
                    textTransform: 'none',
                    minWidth: '200px'
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </Box>
          </form>
        </Card>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 