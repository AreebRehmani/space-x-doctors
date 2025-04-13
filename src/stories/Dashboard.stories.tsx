import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dashboard from '../pages/Dashboard';
import { User } from '../types';
import { AuthContext } from '../app/contexts/AuthContext';
import baseRequest from '../app/api/base-api'; // Import baseRequest

// Define mock data
const mockDailyRevenue = {
    earningByAppointmentFee: 5000,
    earningByChemist: 1200,
    nonDeliveredPrescriptionsCount: 5,
    totalCostRevenueByChemist: 1500,
    medicalTestsReferred: 10,
};

export default {
    title: 'Pages/Dashboard',
    component: Dashboard,
    parameters: {
        // Mock the API call globally for this story file
        mockData: [
            {
                url: '/doctor/daily-revenue', // Match the URL used in baseRequest.get
                method: 'GET',
                status: 200,
                response: mockDailyRevenue,
            },
        ],
    },
} as Meta;

const Template: StoryFn = (args) => {
    const user: User = {
        id: 1,
        username: 'johnDoe',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    }; // Mock user data conforming to User type
    return (
        <AuthContext.Provider value={{ user, login: async () => { }, logout: () => { }, loading: false }}>
            <Dashboard />
        </AuthContext.Provider>
    );
};

export const Default = Template.bind({});
Default.parameters = {
    // You could also apply mocks per-story like this,
    // but the global mock in `export default` is often cleaner
    // if all stories need the same mock.
    // mockData: [
    //     {
    //         url: '/doctor/daily-revenue',
    //         method: 'GET',
    //         status: 200,
    //         response: mockDailyRevenue,
    //     },
    // ],
};
Default.args = {};

// Example of a story with different mock data or error state
export const LoadingError = Template.bind({});
LoadingError.parameters = {
    mockData: [
        {
            url: '/doctor/daily-revenue',
            method: 'GET',
            status: 500, // Simulate a server error
            response: { message: 'Internal Server Error' },
        },
    ],
};
LoadingError.args = {};
