import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    Engine,
    type ISourceOptions,
    type Container,
} from "@tsparticles/engine";
import { saturnParticle } from '../components/animations/saturn-particles';
import { loadAll } from '@tsparticles/all';
import { Box, Typography, Button } from '@mui/material';
import { inView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import './../styles/landingPage.scss';

const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const LandingPage = () => {
    const parallax = useRef<IParallax>(null!)
    const [init, setInit] = useState(false);
    const { ref, inView } = useInView();
    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("tsParticles loaded:", container);
    };

    // Cast our raw JSON config as ISourceOptions.
    const particlesOptions: ISourceOptions = saturnParticle as unknown as ISourceOptions;

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadAll(engine);
        }).then(() => setInit(true));
    }, []);

    if (!init) return <></>;

    return (
        <div id='landing-page-container' style={{ width: '100%', height: '100%' }}>
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

            <Parallax id='landing-page-content-box' style={{}} ref={parallax} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer
                    id='image-1'
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true),
                    }}
                />

                <ParallaxLayer
                    id="landing-page-1"
                    offset={0}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        id="landing-page-1-content-box"
                        sx={{
                            position: "relative",
                            minWidth: '33%',
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "80vh",
                            py: 8,
                            paddingTop: '1%',
                            marginLeft: '5%'
                        }}
                    >
                        <Box
                            ref={ref}
                            id="heading-container"
                            sx={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                                mb: 8,
                                marginTop: '2%'
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{ fontSize: { xs: "2rem", md: "2.7rem" }, marginBottom: '2px' }}
                            >
                                SpaceX Doctors
                            </Typography>
                            <Typography
                                variant="h5"
                                component="p"
                                sx={{ fontFamily: 'math', fontSize: { xs: "1rem", md: "1.2rem" } }}
                            >
                                <i> Revolutionizing Medical Management.</i>
                            </Typography>
                        </Box>

                        <Box
                            id="description-1"
                            ref={ref}
                            sx={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.6s ease-in-out 0.2s, transform 0.6s ease-in-out 0.2s",
                                mb: 8,
                            }}
                        >
                            <Typography variant="h6" component="p" sx={{ maxWidth: "400px" }}>
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
                        </Box>
                    </Box>

                    {/* Wrap the image in a container that centers it */}
                    <Box sx={{ paddingRight: '33%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2719/2719411.png"
                            style={{ width: '50%' }}
                            alt="Centered Icon"
                        />
                        <div id='get-start-btn' style={{ position: 'absolute', marginTop: '25%' }}>
                            <button onClick={() => parallax.current.scrollTo(1)} className="sparkles" style={{ height: '68px', minWidth: '162%', marginLeft: '-25%' }}>
                                <span style={{ paddingTop: '10px' }}>Explore</span>
                            </button>
                        </div>
                    </Box>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <img src={url('server')} style={{ width: '20%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default LandingPage;
