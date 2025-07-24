import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const GoogleSignUp: React.FC = () => {
    const[name, setName]= useState("");
  const [email, setEmail] = useState('');
  const[password, setPassword]=useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-[#fffafa] text-Black rounded-xl w-full max-w-md p-8 shadow-lg">
        {/* Google logo */}
        <img
          src='ytLogo.png'
          alt="Google Logo"
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-2xl font-medium mb-1">Sign Up</h1>
        <p className="text-sm text-black mb-6">Create a new account to continue </p>

        <form onSubmit={handleNext} className="space-y-6">
            <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <TextField

            fullWidth
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-between items-center mt-4">
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
                '&:hover': {
                  backgroundColor: '#93baf8',
                },
              }}
            >
              <Link to="/feed">Sign Up</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleSignUp;
