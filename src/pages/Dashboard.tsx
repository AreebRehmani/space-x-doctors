import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, List, ListItemButton, ListItemText, Button, Icon } from '@mui/material';
import { useAuth } from '../app/contexts/AuthContext';
import { AppointmentsRevenueChart } from '../components/charts/AppointmentsRevenueChart';
import baseRequest from '../app/api/base-api';
import { toIndianFormat } from '../utils/converters';
import { ChemistRevenueChart } from '../components/charts/ChemistRevenueChart';
import { PatientsChart } from '../components/charts/PatientsChart';
import MyOverview from '../components/dashboard/MyOverview';

export type selectedMenu = 'appointments' | 'workers' | 'create-medicine' | 'my-dashboard' | 'search-patient' | 'new-appointment';

const Dashboard = (): JSX.Element => {
    const [patientsData, setPatientsData] = useState<any>(null);
    const [revenueData, setRevenueData] = useState<any>(null);
    const [recentPatients, setRecentPatients] = useState<any[]>([]);
    const [dailyRevenue, setDailyRevenue] = useState<any>(null);
    const [currenySymbol, setCurrencySymbol] = useState<string>('₹');
    const { user } = useAuth();
    const [selectedMenu, setSelectedMenu] = useState<selectedMenu>('appointments');

    const renderComponent = () => {
        switch (selectedMenu) {
            case 'appointments':
                return <hr />;
            case 'workers':
                return <hr />;
            case 'create-medicine':
                return <hr />;
            case 'my-dashboard':
                return <MyOverview currenySymbol={currenySymbol} />;
            case 'new-appointment':
                return <hr />;
            case 'search-patient':
                return <hr />;
            default:
                return <hr />;
        }
    };

    const handleMenuChange = (newSelection: selectedMenu) => {
        setSelectedMenu(newSelection);
    }

    useEffect(() => {
        setCurrencySymbol('₹');
    });


    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const dailyRevenueResponse = await baseRequest.get('/doctor/daily-revenue');
                setDailyRevenue(dailyRevenueResponse.data); // Set the fetched data
            } catch (error) {
                console.error('Error fetching daily revenue data:', error);
                // Optionally set some error state or default data here
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <Box className='dashboard-wrapper' sx={{ display: 'flex', background: 'rgb(5 27 38)', minHeight: '99vh' }}>
            <Box sx={{ width: 240, flexShrink: 0, color: '#d7fbff', background: 'linear-gradient(to left, rgb(0 49 67), #005e6a)', py: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom sx={{ px: 2, color: '#00c9cf', fontFamily: 'Nunito Sans', fontSize: '1.1rem', letterSpacing: '0.175em' }}>
                    Menu
                </Typography>
                <List>
                    <ListItemButton onClick={() => handleMenuChange('appointments')} style={{ backgroundColor: selectedMenu === 'appointments' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="Appointments" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleMenuChange('workers')} style={{ backgroundColor: selectedMenu === 'workers' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="Workers" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleMenuChange('create-medicine')} style={{ backgroundColor: selectedMenu === 'create-medicine' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="Medicines & Medical Equipments" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleMenuChange('new-appointment')} style={{ backgroundColor: selectedMenu === 'new-appointment' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="New Appointment" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleMenuChange('search-patient')} style={{ backgroundColor: selectedMenu === 'search-patient' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="Search Patient" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleMenuChange('my-dashboard')} style={{ backgroundColor: selectedMenu === 'my-dashboard' ? 'rgb(0 255 255 / 39%)' : '' }}>
                        <ListItemText primary="My Dashboard" />
                    </ListItemButton>
                </List>
            </Box>

            <Container className='dashboard-content-container' maxWidth="xl" sx={{ py: 4, flexGrow: 1 }}>
                {renderComponent()}
            </Container>
        </Box>
    );
};

export default Dashboard;
