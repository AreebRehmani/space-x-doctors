import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/contexts/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ username, password });
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to login');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: 'background.paper',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ mb: 4 }}>
                    Login
                </Typography>

                {error && <Typography color="error" align="center" sx={{ mb: 2 }}>{error}</Typography>}

                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    required
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mt: 3, py: 1.5 }}
                >
                    Sign In
                </Button>

                <Grid container justifyContent="center" sx={{ mt: 2 }}>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
            </Box>
        </Container>
    );
};

export default LoginPage;