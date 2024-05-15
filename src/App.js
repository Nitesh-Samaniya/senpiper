import "./App.css";
import { Box, CssBaseline, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Form from './components/Form';
import FeedBackTable from "./components/Table";
import React, { useEffect, useState } from "react";

function App() {
  const [section, setSection] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSetSection = (val)=>{
    setSection(val);
    localStorage.setItem("senPiperF&gNitesh", val);
  }

  useEffect(()=>{
    const sec = localStorage.getItem("senPiperF&gNitesh") || 0
    setSection(sec)
  },[])

  return (
    <Box
      sx={{ fontFamily: "sans-serif", position: "relative", width: "100%" }}
      className="App"
    >
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "1rem",
          backgroundColor: "#5146ff",
          color: "white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1100,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"}>F&G</Typography>
          {!isMobile && <Typography variant="h5">Feedback System</Typography>}
        </Box>

        <Box sx={{ display: "flex", gap: "1rem", fontSize: "1.3rem" }}>
          <Box
            onClick={() => handleSetSection(0)}
            style={{ cursor: "pointer" }}
          >
            Form
          </Box>
          <Box onClick={() => handleSetSection(1)} sx={{ cursor: "pointer" }}>
            Submissions
          </Box>
        </Box>

      </Box>

      <Toolbar />

      <Box mt={5}>
        {
          // eslint-disable-next-line
          section == 0 ? <Form /> : <FeedBackTable />
        }
      </Box>
    </Box>
  );
}

export default App;
