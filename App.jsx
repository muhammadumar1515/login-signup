import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Container, Button, Box } from '@mui/material';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container maxWidth="xs" sx={{ marginTop: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="warning"
          onClick={() => setIsLogin(!isLogin)}
          sx={{ marginBottom: 3 }}
        >
          {isLogin ? 'Go to Sign Up' : 'Go to Login'}
        </Button>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </Box>
    </Container>
  );
};

export default App;
