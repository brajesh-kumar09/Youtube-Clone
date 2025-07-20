import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const GoogleSignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

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
      console.log('Email:', email);
      navigate('/feed');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url('/bg-image.jpg')` }} // Make sure this image exists in your public folder
    >
      <div className="bg-[#fffafa] text-black rounded-xl w-full max-w-md p-8 shadow-lg">
        {/* Google logo */}
        <img
          src="ytLogo.png"
          alt="Google Logo"
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-2xl font-medium mb-1">Sign in</h1>
        <p className="text-sm text-black mb-6">to continue to YouTube</p>

        <form onSubmit={handleNext} className="space-y-6">
          <div className="space-y-5">
            <TextField
              fullWidth
              label="Email or phone"
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

          <div className="flex justify-between items-center mt-4">
            <Link to="/sign-up" className="text-sm text-blue-400 hover:underline">
              Create account
            </Link>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#8ab4f8',
                color: '#000',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '20px',
                paddingX: 3,
                paddingY: 0.5,
                '&:hover': {
                  backgroundColor: '#93baf8',
                },
              }}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleSignIn;
