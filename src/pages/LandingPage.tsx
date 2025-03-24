import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import {
    Engine,
    type ISourceOptions,
    type Container,
} from "@tsparticles/engine";
import { Box, Typography, Button, Container as MuiContainer } from "@mui/material";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { polygonDeer } from "../components/animations/ts-particles";


const LandingPage = () => {
    const [init, setInit] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadAll(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("tsParticles loaded:", container);
    };

    // Cast our raw JSON config as ISourceOptions.
    const particlesOptions: ISourceOptions = polygonDeer as unknown as ISourceOptions;

    if (!init) return <></>;

    return (
        <MuiContainer maxWidth="xl" sx={{ minHeight: "100vh", position: "relative" }}>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesOptions}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "100vh",
                    py: 8,
                }}
            >
                <Box
                    ref={ref}
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                        mb: 8,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                    >
                        SpaceX Doctors
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                    >
                        Revolutionizing Medical Management with Cutting-Edge Technology
                    </Typography>
                </Box>
                <Box
                    ref={ref}
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.6s ease-in-out 0.2s, transform 0.6s ease-in-out 0.2s",
                        mb: 8,
                    }}
                >
                    <Typography variant="h6" component="p" sx={{ maxWidth: "600px" }}>
                        Our platform empowers medical professionals with efficient patient management, intelligent analytics, and seamless collaboration tools.
                    </Typography>
                </Box>
                <Box
                    ref={ref}
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.6s ease-in-out 0.4s, transform 0.6s ease-in-out 0.4s",
                    }}
                >
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        size="large"
                        sx={{ px: 4, py: 2, fontSize: "1.1rem" }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>
        </MuiContainer>
    );
};

export default LandingPage;
