import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import About from './pages/About';
import Landing from './pages/Landing';

// Criando um tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#002250', // Novo azul principal
      light: '#1a3760',
      dark: '#001940',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#F5F5F5', // Fundo branco pérola
      paper: '#FFFFFF', // Componentes em branco
      navbar: '#002250', // Cor específica para navbar
      footer: '#002250', // Cor específica para footer
    },
    text: {
      primary: '#002250', // Texto principal em azul escuro
      secondary: 'rgba(0, 34, 80, 0.7)', // Texto secundário em azul com transparência
      light: '#FFFFFF', // Texto claro para navbar e footer
    },
  },
  typography: {
    fontFamily: '"Red Hat Display", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
  },
});

const AppContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {!isLandingPage && <Navbar />}
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/contactos" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
