import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ScriptableContext } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PatientsChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor?: string[];
        }[];
    };
}

export const ChemistRevenueChart = ({ data }: PatientsChartProps) => {
    const processedData = {
        ...data,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: ['rgb(3, 189, 222)']
        }))
    };

    return (
        <Bar
            options={{
                color: '#fff',
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#fff', font: { size: 14 } }
                    },
                    tooltip: {
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.7)'
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                },
                elements: {
                    bar: {
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: 'rgba(0, 229, 255, 0.9)',
                        borderSkipped: false
                    }
                }
            }}
            data={processedData}
        />
    );
};