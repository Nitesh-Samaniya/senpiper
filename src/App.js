import "./App.css";
import { Tabs, Tab, Box, CssBaseline, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Form from './components/Form';

function App() {
  // const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{fontFamily: 'sans-serif'}} className="App">
      <CssBaseline />
      <Box 
        position={'fixed'}
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          p: 1,
          backgroundColor: '#CAF4FF'
        }} 
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px'
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"}>F&G</Typography>
          {!isMobile && <Typography variant="h5">Feedback System</Typography>}
        </Box>

        <Box>
          <Tabs>
            <Tab label="Feedback Form" />
            <Tab label="Submissions" />
          </Tabs>
        </Box>
      </Box>

      <Toolbar />

      <Box mt={5}>
        <Form />        
      </Box>
    </Box>
  );
}

export default App;
