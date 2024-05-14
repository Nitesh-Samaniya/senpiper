import Box from '@mui/material/Box';
import "./App.css";
import { CssBaseline, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import Form from './components/Form';

function App() {
  
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
        <Box>
          <Typography variant="h5">F&G Feedback System</Typography>
        </Box>

        <Box>
          <Tabs>
            <Tab label="Feedback Form" />
            <Tab label="Submissions" />
          </Tabs>
        </Box>
      </Box>

      <Toolbar />

      <Box>
        <Form />        
      </Box>
    </Box>
  );
}

export default App;
