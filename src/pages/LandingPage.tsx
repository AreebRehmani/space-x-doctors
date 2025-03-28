import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine, type ISourceOptions, type Container } from "@tsparticles/engine";
import { saturnParticle } from '../components/animations/saturn-particles';
import { loadAll } from '@tsparticles/all';
import { Box, Typography, Button } from '@mui/material';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
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
    const particlesOptions: ISourceOptions = saturnParticle as unknown as ISourceOptions;

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadAll(engine);
        }).then(() => setInit(true));
    }, []);

    if (!init) return <></>;

    return (
        <div id='landing-page-container' className='no-select' style={{ width: '100%', height: '100%' }}>
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

            <Parallax ref={parallax} pages={3} style={{}}>
                {/* PAGE 0 (Top Section) */}
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />

                {/* Page 0 Content */}
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {/* Main Content Box */}
                    <Box sx={{
                        position: "relative",
                        minWidth: '33%',
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "80vh",
                        py: 8,
                        paddingTop: '1%',
                        marginLeft: '5%'
                    }}>
                        {/* Headings */}
                        <Box ref={ref} sx={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                            mb: 8,
                            marginTop: '2%'
                        }}>
                            <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: "2rem", md: "2.7rem" }, marginBottom: '2px' }}>
                                SpaceX Doctors
                            </Typography>
                            <Typography variant="h5" component="p" sx={{ fontFamily: 'ui-monospace', fontSize: { xs: "1rem", md: "1.2rem" } }}>
                                <i> Revolutionizing Medical Management.</i>
                            </Typography>
                        </Box>

                        {/* Description */}
                        <Box ref={ref} sx={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.6s ease-in-out 0.2s, transform 0.6s ease-in-out 0.2s",
                            mb: 8,
                        }}>
                            <Typography variant="h6" component="p" sx={{ maxWidth: "400px", fontFamily: 'monospace' }}>
                                Our platform empowers medical professionals with efficient patient management, intelligent analytics, and seamless collaboration tools.
                            </Typography>

                            <div id='get-start-btn' style={{ position: 'absolute', marginTop: '17%' }}>
                                <button className="sparkles" style={{ zIndex: 99, height: '68px', width: '100%', marginLeft: '-1%' }}>
                                    <span style={{ paddingTop: '10px', fontSize: '1em' }}>Get Started</span>
                                </button>
                            </div>

                            <Typography style={{ fontFamily: 'ui-monospace', fontStyle: 'italic', color: 'white', position: 'absolute', paddingTop: '47vh', marginLeft: '-4vw' }}>SpaceX Doctors by <i>Areeb Rehmani</i></Typography>

                        </Box>
                    </Box>

                    {/* Right Side Image */}
                    <Box sx={{
                        paddingRight: '33%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>

                        <img onClick={() => parallax.current.scrollTo(1)}
                            src="https://cdn-icons-png.flaticon.com/512/2719/2719411.png"
                            style={{ width: '50%' }}
                            alt="Centered Icon"
                        />

                    </Box>

                    <div id='login-btn' style={{ position: 'absolute', marginTop: '-89vh', marginLeft: '89vw' }}>
                        <button className="sparkles" style={{ zIndex: 99, height: '45px', width: '104%', marginLeft: '-1%' }}>
                            <span style={{ paddingTop: '5px', fontSize: '0.6em' }}>Login</span>
                        </button>
                    </div>

                    <div style={{ position: 'absolute', marginLeft: '58vw', marginTop: '52vh' }}>
                        <img style={{ height: '48vh' }} src="/pics/cutout.png" alt="Cutout" />
                    </div>


                </ParallaxLayer>

                {/* PAGE 1 (Middle Section) */}
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />

                {/* Background Clouds */}
                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                {/* Interactive Layer */}
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

                {/* PAGE 2 (Bottom Section) */}
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer offset={2.5} speed={-0.4} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={-0.3} style={{
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true),
                }} />

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                {/* Interactive Layer */}
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