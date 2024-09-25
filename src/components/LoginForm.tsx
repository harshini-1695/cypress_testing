import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = React.useState(''),
    [password, setPassword] = React.useState(''),
    [message, setMessage] = React.useState(''),
    checkMsg = () => {if (message) setMessage('')};

  const handleSubmit = () => {
    if (!email || !password) {
      setMessage('Email and password fields are required');
    } else {
      setMessage('Successfully logged in');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container maxWidth="xs">
        <h1 style={{textAlign: 'center'}}>Login</h1>
        {message && (
          <Typography color="error" className="message" style={{ marginTop: '16px', textAlign: 'center' }}>
          {message}
          </Typography>
        )}
        <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => {setEmail(e.target.value); checkMsg()}}
        />
        <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => {setPassword(e.target.value); checkMsg()}}
        />
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            style={{ marginTop: '16px' }}
        >
            Submit
        </Button>
    </Container>
  );
};

export default LoginForm;
