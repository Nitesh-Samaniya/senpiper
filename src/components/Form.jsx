import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, FormControl, FormLabel, Typography, Box, Snackbar, Alert } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Form = ({feedbackData}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceQuality: '',
    beverageQuality: '',
    cleanliness: '',
    overallExperience: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const below735 = useMediaQuery('(max-width:735px)');
  const below900 = useMediaQuery('(max-width:900px)');
  const below600 = useMediaQuery('(max-width:600px)');


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'serviceQuality' || name === 'beverageQuality' || name === 'cleanliness' || name === 'overallExperience') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    } else {
      if(name === 'phone'){
        const regex = /^[0-9\b]+$/;
        if (value === '' || (regex.test(value) && value.length <= 10)) {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      }else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
      const data = [...feedbackData, formData];
      localStorage.setItem('feedbackData', JSON.stringify(data));
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceQuality: '',
        beverageQuality: '',
        cleanliness: '',
        overallExperience: ''
      })
      setSnackbarMessage('Thank you for completing the information');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }
  };

  const validateForm = () => {
    if(formData.beverageQuality==='' || formData.cleanliness==='' || formData.overallExperience==='' || formData.serviceQuality===''){
      setSnackbarMessage('Please fill all the check boxes.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return false;
    }
    return true;
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{
          width: '80%',
          margin: 'auto',
          padding: '1rem',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        }}>

        <Box>
          {/* bar */}
          <Box sx={{
            width: '100%',
            padding: '0.5rem',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
          }}>
            <Typography variant="h4" sx={{color: '#5146ff'}}>Aromatic Bar</Typography>
          </Box>

          {/* desc */}
          <Box mt={2} sx={{color: 'gray', textAlign: 'center', fontSize: below735 ? '0.7rem' : '0.9rem'}}>
            We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.
          </Box>

          {/* inputs */}
          <Box mt={5} sx={{
              display: 'grid',
              gridTemplateColumns: below600 ? 'repeat(1,1fr)' : 'repeat(2,1fr)',
              columnGap: '2rem',
              rowGap: '1rem'
            }}
          >
            <TextField 
              sx={{
                  width: below900 ? 'calc(100% - 1rem)' : 'calc(80% - 1rem)',
              }} 
              label="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} fullWidth required variant="standard" />

            <TextField 
              sx={{
                width: below900 ? 'calc(100% - 1rem)' : 'calc(80% - 1rem)',
              }} 
              label="Email" name="email" value={formData.email} type="email" onChange={handleChange} fullWidth required variant="standard"/>
            <TextField
              sx={{
                width: below900 ? 'calc(100% - 1rem)' : 'calc(80% - 1rem)',
              }} 
              label="Phone" name="phone" value={formData.phone} type="tel" onChange={handleChange} fullWidth required variant="standard" inputProps={{ maxLength: 10 }}/>
          </Box>

          {/* rating */}
          <Box mt={5} sx={{
              display: 'grid',
              gridTemplateColumns: below600 ? 'repeat(1,1fr)' : below900 ? 'repeat(2,1fr)' : 'repeat(2,1fr)',
              columnGap: '2rem',
              rowGap: '2rem'
            }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Please rate the quality of the service you received from your host</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={formData.serviceQuality === 'Excellent'} onChange={handleChange} />}
                label="Excellent"
                name="serviceQuality"
                value="Excellent"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.serviceQuality === 'Good'} onChange={handleChange} />}
                label="Good"
                name="serviceQuality"
                value="Good"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.serviceQuality === 'Fair'} onChange={handleChange} />}
                label="Fair"
                name="serviceQuality"
                value="Fair"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.serviceQuality === 'Bad'} onChange={handleChange} />}
                label="Bad"
                name="serviceQuality"
                value="Bad"
              />
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Please rate the quality of your beverage</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={formData.beverageQuality === 'Excellent'} onChange={handleChange} />}
                label="Excellent"
                name="beverageQuality"
                value="Excellent"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.beverageQuality === 'Good'} onChange={handleChange} />}
                label="Good"
                name="beverageQuality"
                value="Good"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.beverageQuality === 'Fair'} onChange={handleChange} />}
                label="Fair"
                name="beverageQuality"
                value="Fair"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.beverageQuality === 'Bad'} onChange={handleChange} />}
                label="Bad"
                name="beverageQuality"
                value="Bad"
              />
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Was our restaurant clean?</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={formData.cleanliness === 'Excellent'} onChange={handleChange} />}
                label="Excellent"
                name="cleanliness"
                value="Excellent"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.cleanliness === 'Good'} onChange={handleChange} />}
                label="Good"
                name="cleanliness"
                value="Good"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.cleanliness === 'Fair'} onChange={handleChange} />}
                label="Fair"
                name="cleanliness"
                value="Fair"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.cleanliness === 'Bad'} onChange={handleChange} />}
                label="Bad"
                name="cleanliness"
                value="Bad"
              />
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Please rate your overall dining experience</FormLabel>
              <FormControlLabel
                control={<Checkbox checked={formData.overallExperience === 'Excellent'} onChange={handleChange} />}
                label="Excellent"
                name="overallExperience"
                value="Excellent"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.overallExperience === 'Good'} onChange={handleChange} />}
                label="Good"
                name="overallExperience"
                value="Good"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.overallExperience === 'Fair'} onChange={handleChange} />}
                label="Fair"
                name="overallExperience"
                value="Fair"
              />
              <FormControlLabel
                control={<Checkbox checked={formData.overallExperience === 'Bad'} onChange={handleChange} />}
                label="Bad"
                name="overallExperience"
                value="Bad"
              />
            </FormControl>
          </Box>

          {/* button */}
          <Box mt={5} mb={5} sx={{display: 'flex', justifyContent:'center'}}>
            <Button variant="outlined" type="submit">Submit</Button>
          </Box>

          <Snackbar 
            open={snackbarOpen} 
            autoHideDuration={6000} 
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            >
            <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>

      </Box>

    </form>
  );
};

export default Form;
