import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoogleSignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { name: '', email: '', password: '' };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Name:', name);
      console.log('Email:', email);
      navigate('/feed');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url('/bg-image.jpg')` }} // image should be in /public
    >
      <div className="bg-[#fffafa] text-black rounded-xl w-full max-w-md p-8 shadow-lg">
        {/* Google logo */}
        <img
          src="ytLogo.png"
          alt="Google Logo"
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-2xl font-medium mb-1">Sign Up</h1>
        <p className="text-sm text-black mb-6">Create a new account to continue</p>

        <form onSubmit={handleNext} className="space-y-6">
          <div className="space-y-4">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>

          <div className="flex justify-end items-center mt-4">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#8ab4f8',
                color: '#000',
                textTransform: 'none',
                borderRadius: '20px',
                paddingX: 3,
                paddingY: 0.5,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#93baf8',
                },
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleSignUp;
