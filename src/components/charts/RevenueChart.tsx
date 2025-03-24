import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RevenueChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
        }[];
    };
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
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