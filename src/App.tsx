import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from '@mui/material';
import { createTheme } from './theme';

const theme = createTheme();

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
