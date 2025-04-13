import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';
import api from '../../app/api/base-api';

const PatientSummaryPage = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await api.get(`/patients/${id}`);
                setPatient(response.data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!patient) {
        return <div>Patient not found</div>;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                Patient Summary
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Patient Information" />
                        <CardContent>
                            <Typography variant="body1" gutterBottom>
                                <strong>Name:</strong> {patient.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Age:</strong> {patient.age}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Gender:</strong> {patient.gender}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Date of Birth:</strong> {patient.dob}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Contact:</strong> {patient.contact}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Medical History" />
                        <CardContent>
                            {/* Medical history content */}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="Prescriptions" />
                        <CardContent>
                            {/* Prescriptions content */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PatientSummaryPage;