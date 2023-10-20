import React from 'react';
import { Button, TextField, FormControlLabel, Box, Typography, Container } from '@mui/material';


function Adminlogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // handle form submission
  };

  return (
    <Container component={"main"} maxWidth={"xs"}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Typography
          component="h1" variant="h5"
          sx={{
            fontWeight: '700'
          }}
        >
          Admin Sign in
        </Typography>
      </Box>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Admin Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>

      <Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            p: 2,
            bgcolor: 'success.main'
          }}
          onClick={handleSubmit}
        >
          <Typography
            sx={{

            }}
          >
            Log In
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Adminlogin