import React, { useEffect, useState, useMemo } from 'react';
import { Box, Typography, Button, Link, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/contexts/AuthContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import back icon
import './Login.scss';
import { Engine, type ISourceOptions, type Container } from "@tsparticles/engine";
import { polygonDeer } from '../../components/animations/ts-particles';
import { loadAll } from '@tsparticles/all';
import Particles, { initParticlesEngine } from "@tsparticles/react";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (!init) {
            initParticlesEngine(async (engine: Engine) => {
                await loadAll(engine);
            }).then(() => setInit(true));
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ username, password });
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to login');
        }
    };

    const MemoizedParticles = useMemo(() => (
        <Particles
            id="tsparticles"
            options={polygonDeer as unknown as ISourceOptions}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
        />
    ), []); // Empty dependency array ensures it runs only once

    return (
        <div className="login-page no-select">
            {/* Left Side - Login Form */}
            <div className="login-left">
                <Box component="form" onSubmit={handleSubmit} className="login-form">

                    <div>
                        <IconButton
                            onClick={() => navigate('../')}
                            className="back-button"
                            sx={{
                                position: 'absolute',
                                top: 20,
                                left: 20,
                                color: 'white',
                                marginTop: '-2vh',
                            }}
                        >
                            <ArrowBackIcon fontSize='medium' />
                        </IconButton>
                        <br />
                    </div>


                    <Typography style={{ fontFamily: 'ui-monospace', marginTop: '3vh' }} variant="h4" component="h1" align="center">
                        SpaceX Doctors <br />Login
                    </Typography>

                    <div style={{ marginTop: '10vh' }}>
                        <input
                            className='login-btns'
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoFocus
                        />

                        <input
                            className='login-btns'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" id='login-with-cred-btn' className="sparkles sparkles_2" style={{ marginTop: '4vh', zIndex: 99, height: '58px', width: '64%', marginLeft: '16%' }}>
                            <span style={{ paddingTop: '5%', fontSize: '0.6em' }}>Sign In</span>
                        </button>

                        <Grid container justifyContent="center" sx={{ mt: 2, marginTop: '4vh' }}>
                            <Link href="#" variant="body2" className="login-link" style={{ color: 'white' }}>
                                Forgot password?
                            </Link>
                        </Grid>
                    </div>
                </Box>
            </div>

            {/* Right Side - Particles */}
            <div className="login-right">
                {MemoizedParticles}
                <Typography style={{ color: 'cadetblue', fontStyle: 'italic', zIndex: '99', marginLeft: '34vw', marginTop: '26vh' }}>
                    - Future technology of Live X-Rays can soon possibly track veins and blood flow in real time. Hover on the Live X-Ray of Deer shown on this page, to expereince this futuristic vision.
                </Typography>
            </div>
        </div>
    );
};

export default LoginPage;
