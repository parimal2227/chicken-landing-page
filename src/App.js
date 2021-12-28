import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: '#FAFAFA', height: '100vh' }}>
        <ResponsiveAppBar/>
      </Box>
    </Container>
  </React.Fragment>
  );
}


export default App;
