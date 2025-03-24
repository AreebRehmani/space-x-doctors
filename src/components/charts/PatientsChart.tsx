import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PatientsChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
        }[];
    };
}

export const PatientsChart = ({ data }: PatientsChartProps) => {
    return (
        <Bar
            options={{
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: false,
                    },
                },
            }}
            data={data}
        />
    );
};