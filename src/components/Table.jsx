import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, TextField, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


const columns= [
  { id: 'customerName', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'serviceQuality', label: 'Service Quality' },
  { id: 'beverageQuality', label: 'Beverage Quality' },
  { id: 'cleanliness', label: 'Cleanliness' },
  { id: 'overallExperience', label: 'OverallExp' },
];

export default function FeedBackTable() {
  const [submissions, setSubmissions] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const below400 = useMediaQuery('(max-width:400px)');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getColor = (quality) => {
    switch(quality) {
      case 'Excellent':
        return '#4caf50'; // Green
      case 'Good':
        return '#ff9800'; // Orange
      case 'Fair':
        return '#ffc0cb'; // Pink
      case 'Bad':
        return '#f44336'; // Red
      default:
        return '#ffffff'; // White
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSubmissions = submissions.filter((submission) =>
    submission.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('sensPiperfeedNitesh')) || []
    let dataWithId = data.map((item, index) => ({ id: index, ...item }));
    dataWithId = dataWithId.reverse();
    if (data) {
      setSubmissions(dataWithId);
    }
  }, []);

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{width: '90%', margin:'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{color: '#5146ff'}}>
            <Typography variant= {below400 ? "h6" : "h4"}>
                Customer feedbacks
            </Typography>
        </Box>

        <Box sx={{ marginBottom: '1rem' }}>
          <TextField
            label="Search by Name"
            variant="standard"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        </Box>

        <Paper sx={{ width: '90%', overflow: 'hidden', margin: 'auto' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                        backgroundColor: '#6f42c1',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    //   style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredSubmissions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        const cellStyle = (['serviceQuality', 'beverageQuality', 'cleanliness', 'overallExperience'].includes(column.id))
                          ? { color: getColor(value), fontWeight: 'bold' }
                          : {fontWeight: 'bold'};
                        return (
                            <TableCell 
                              key={column.id} 
                              align={column.align}
                              sx={cellStyle}
                            >
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5,10, 25, 100]}
            component="div"
            count={filteredSubmissions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </Box>
  );
}