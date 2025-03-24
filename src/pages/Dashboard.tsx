import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';
import { useAuth } from '../app/contexts/AuthContext';
import api from '../app/services/api';
import { PatientsChart } from '../components/charts/PatientsChart';
import { RevenueChart } from '../components/charts/RevenueChart';
import { RecentPatientsTable } from '../components/patients/RecentPatientsTable';


const Dashboard = () => {
    const [patientsData, setPatientsData] = useState<any>(null);
    const [revenueData, setRevenueData] = useState<any>(null);
    const [recentPatients, setRecentPatients] = useState<any[]>([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [patientsResponse, revenueResponse, recentPatientsResponse] = await Promise.all([
                    api.get('/dashboard/patients'),
                    api.get('/dashboard/revenue'),
                    api.get('/patients/recent'),
                ]);

                setPatientsData(patientsResponse.data);
                setRevenueData(revenueResponse.data);
                setRecentPatients(recentPatientsResponse.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Dashboard
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Total Patients" subheader="This Month" />
                        <CardContent>
                            <Box sx={{ height: 200 }}>
                                {/* Placeholder for total patients metric */}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Total Revenue" subheader="This Month" />
                        <CardContent>
                            <Box sx={{ height: 200 }}>
                                {/* Placeholder for total revenue metric */}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Active Users" subheader="Currently Online" />
                        <CardContent>
                            <Box sx={{ height: 200 }}>
                                {/* Placeholder for active users metric */}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Card sx={{ height: 400 }}>
                        <CardHeader title="Patients Attended (Day-wise)" />
                        <CardContent>
                            {patientsData && <PatientsChart data={patientsData} />}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ height: 400 }}>
                        <CardHeader title="Revenue Generated (Day-wise)" />
                        <CardContent>
                            {revenueData && <RevenueChart data={revenueData} />}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Recent Patients" subheader="Last 10 Patients" />
                        <CardContent>
                            <RecentPatientsTable patients={recentPatients} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;