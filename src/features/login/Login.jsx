import React from 'react'
import { Button, TextField, FormControlLabel, Box, Typography, Container } from '@mui/material';
function Login() {
  
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
          component="h1" variant="h6"
          sx={{
            fontWeight: '600 '
          }}
        >
          Log in to your account
        </Typography>
      </Box>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="text"
          label="Username"
          name="username"
          autoComplete="username"
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

export default Login