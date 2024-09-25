import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import Quiz from './Quiz';

const ContainerApp = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const BotaoTrocaTema = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  borderRadius: '50%',
  minWidth: '50px',
  minHeight: '50px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#555' : '#f9f9c2',
  },
}));

const App = () => {
  const [modoEscuro, setModoEscuro] = useState(false);

  const tema = createTheme({
    palette: {
      mode: modoEscuro ? 'dark' : 'light',
      background: {
        default: modoEscuro ? '#121212' : '#f5f5f5',
      },
      primary: {
        main: '#1976d2',
      },
    },
  });

  const alternarTema = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <ContainerApp>
        <BotaoTrocaTema variant="contained" onClick={alternarTema}>
          {modoEscuro ? '🌙' : '☀️'}
        </BotaoTrocaTema>
        <Quiz />
      </ContainerApp>
    </ThemeProvider>
  );
};

export default App;