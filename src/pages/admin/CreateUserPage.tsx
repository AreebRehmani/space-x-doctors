import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../app/api/base-api';

const CreateUserPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/users', { username, password, role });
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create user');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Create New User
            </Typography>

            {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 4 }}
            >
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

                <FormControl fullWidth margin="normal">
                    <InputLabel>Role</InputLabel>
                    <Select
                        value={role}
                        label="Role"
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="chemist">Chemist</MenuItem>
                        <MenuItem value="receptionist">Receptionist</MenuItem>
                        <MenuItem value="nurse">Nurse</MenuItem>
                        <MenuItem value="doctor">Doctor</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mt: 3, py: 1.5 }}
                >
                    Create User
                </Button>
            </Box>
        </Container>
    );
};

export default CreateUserPage;