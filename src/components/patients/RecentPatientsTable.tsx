import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface RecentPatientsTableProps {
    patients: any[];
}

export const RecentPatientsTable = ({ patients }: RecentPatientsTableProps) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 120 },
        { field: 'createdAt', headerName: 'Date', width: 180 },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={patients}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>
    );
};