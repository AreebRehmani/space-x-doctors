import { Box, Button, Card, CardContent, CardHeader, Grid, Icon, Typography } from "@mui/material";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from "react";
import { AppointmentsRevenueChart } from "../charts/AppointmentsRevenueChart";
import { PatientsChart } from "../charts/PatientsChart";
import { ChemistRevenueChart } from "../charts/ChemistRevenueChart";
import { toIndianFormat } from "../../utils/converters";

interface MyOverviewProps {
    currenySymbol: string;
}

const MyOverview = (props: MyOverviewProps) => {
    const [showMoney, setShowMoney] = useState<boolean>(false);

    const patientChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Patient',
                data: [10, 20, 15, 30, 25, 10, 20, 15, 30, 25, 30, 45],
            },
        ],
    };

    const appointmentRevenueChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'INR',
                data: [100000, 220000, 175000, 300000, 2500.34, 107878, 287034, 153334, 300033, 259234, 323430, 432345],
            },
        ],
    };

    const chemistRevenueChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'INR',
                data: [10, 20, 15, 30, 25, 10, 20, 15, 30, 25, 30, 45],
            },
        ],
    };

    const hanldeClickShowMoneyIcon = () => {
        setShowMoney(!showMoney);
    }

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 0, color: 'white' }}>
                Overview

                <Box sx={{ float: 'right', color: '#04ecd0' }}>
                    <Button variant='outlined'>Change View</Button>
                </Box>
                <Typography style={{ fontSize: '0.95rem', color: 'aquamarine' }}><i>Current view: {'Monthly'}</i></Typography>
            </Typography>


            <Grid container spacing={4} sx={{ mt: 0 }}>
                <Grid item xs={12} md={6}>
                    <Card className='revenue-details-container' style={{ minHeight: '60vh', background: '#0096ff14', color: 'white', border: '1px solid', borderColor: 'cadetblue' }}>
                        <CardHeader title={`Monthly Revenue ( Jan, 2025 )`} />

                        <CardContent>
                            <Typography sx={{ fontFamily: 'Nunito Sans', fontSize: '1rem' }}>Earnings by Appointment Fee: <strong style={{ color: 'greenyellow' }}>{showMoney ? toIndianFormat(2000.01) : '*****'}</strong> {props.currenySymbol}</Typography>
                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '1vh', fontSize: '1rem' }}>Earnings by Chemist: <strong style={{ color: 'greenyellow' }}>{showMoney ? toIndianFormat(3050.53) : '*****'}</strong> {props.currenySymbol}</Typography>

                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '4vh', fontSize: '1rem' }}>Total Revenue by Chemist: <strong style={{ color: 'aquamarine' }}>{showMoney ? toIndianFormat(10050.53) : '*****'}</strong> {props.currenySymbol}</Typography>
                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '1vh', fontSize: '1rem' }}>Total Patients Treated: <strong style={{ color: 'cyan' }}>{1200}</strong></Typography>
                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '1vh', fontSize: '1rem' }}>Medical Tests Referred: <strong style={{ color: 'cyan' }}>{12}</strong></Typography>

                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '4vh', fontSize: '1rem' }}>Non-Delivered Prescriptions Count: <strong style={{ color: '#fb6464' }}>{5}</strong></Typography>

                            <Typography sx={{ fontFamily: 'Nunito Sans', marginTop: '3vh', fontSize: '1.3rem' }}>Total Earnings: <strong style={{ color: 'greenyellow' }}>{showMoney ? toIndianFormat(5050.54) : '******'}</strong> {props.currenySymbol}</Typography>
                        </CardContent>
                        <Button variant='outlined' style={{ float: 'right', color: '#2bdbe2', marginTop: '1vh', marginBottom: '1vh', marginRight: '1vw' }}>Change Month</Button>
                        <Icon onClick={hanldeClickShowMoneyIcon} style={{ cursor: 'pointer', marginTop: '1.4vh', float: 'right', marginRight: '1.5vw' }}>
                            <VisibilityOffOutlinedIcon />
                        </Icon>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='revenue-chart-container' style={{ minHeight: '60vh', background: 'linear-gradient(to top, rgb(0 0 0), rgb(0 162 176))' }}>
                        <CardHeader title="Appointments Revenue" />
                        <CardContent >
                            <AppointmentsRevenueChart data={appointmentRevenueChartData} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mt: '0' }}>
                <Grid item xs={12} md={6}>
                    <Card className='patients-chart-container' style={{ background: 'linear-gradient(to top, rgb(0, 0, 0), rgb(0 123 213))' }}>
                        <CardHeader title="Patients" />
                        <CardContent>
                            <PatientsChart data={patientChartData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='chemist-chart-container' style={{ background: 'linear-gradient(to top, rgb(0 0 0), rgb(0 162 176))' }}>
                        <CardHeader title="Chemist Revenue" />
                        <CardContent>
                            <ChemistRevenueChart data={chemistRevenueChartData} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default MyOverview;