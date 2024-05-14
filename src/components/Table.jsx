import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const FeedBackTable = () => {
  const [submissions, setSubmissions] = useState(JSON.parse(localStorage.getItem('feedbackData')) || []);

 

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('feedbackData'));
    if (data) {
      setSubmissions(data);
    }
  }, []);

  return (
    <Box 
        sx={{
            border: '1px solid red',
            width: '95%',
            margin: 'auto'
        }}
    >
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Service Quality</TableCell>
                        <TableCell>Beverage Quality</TableCell>
                        <TableCell>Cleanliness</TableCell>
                        <TableCell>Overall Exp.</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((submission, index) => (
                        <TableRow key={index}>
                            <TableCell>{submission.customerName}</TableCell>
                            <TableCell>{submission.email}</TableCell>
                            <TableCell>{submission.phone}</TableCell>
                            <TableCell>{submission.serviceQuality}</TableCell>
                            <TableCell>{submission.beverageQuality}</TableCell>
                            <TableCell>{submission.cleanliness}</TableCell>
                            <TableCell>{submission.overallExperience}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  );
};

export default FeedBackTable;
