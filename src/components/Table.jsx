import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FeedBackTable = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
      setSubmissions([data]);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Service Quality</TableCell>
            <TableCell>Beverage Quality</TableCell>
            <TableCell>Cleanliness</TableCell>
            <TableCell>Overall Experience</TableCell>
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
  );
};

export default FeedBackTable;
