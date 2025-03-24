export interface User {
    id: number;
    username: string;
    role: 'admin' | 'chemist' | 'receptionist' | 'nurse' | 'doctor';
    createdAt: Date;
    updatedAt: Date;
}

export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    dob: Date;
    contact: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface PatientAudit {
    id: number;
    patientId: number;
    action: string;
    timestamp: Date;
}

export interface RevenueAudit {
    id: number;
    amount: number;
    description: string;
    timestamp: Date;
}