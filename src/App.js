import "./App.css";
import { Box, CssBaseline, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Form from './components/Form';
import FeedBackTable from "./components/Table";
import { useState } from "react";

function App() {
  const [section, setSection] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  
  return (
    <Box sx={{fontFamily: 'sans-serif', position: 'relative', width: '100%'}} className="App">
      <CssBaseline />
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          p: 1,
          backgroundColor: '#CAF4FF',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1100,
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

        <Box sx={{display: 'flex', gap: '1rem', color: 'gray', fontSize: '1.3rem'}}>
          <Box onClick={()=>setSection(0)} style={{cursor: 'pointer'}}>Form</Box>
          <Box onClick={()=>setSection(1)} sx={{cursor: 'pointer'}}>Submissions</Box>
        </Box>

      </Box>

      <Toolbar />

      <Box mt={5}>
        {
          section===0 ? <Form /> : <FeedBackTable />
        }
      </Box>
    </Box>
  );
}

export default App;
