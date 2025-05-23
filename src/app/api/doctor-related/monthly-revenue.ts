import { Doctor } from "./doctor";

export interface MonthlyRevenue {
    doctor: Doctor;

    month: number;
    year: number;

    // Earning appointment fees
    earningByAppointmentFee: string;

    // Earning by selling Medicine & Equipment from thier own Chemist ( if any )
    earningByChemist: string;

    // Number of prescriptions not Buyed by our Chemist
    nonDeliveredPrescriptionsCount: number;

    // Total Revenue generated by Chemist by selling Medicine and MedicalEquipment
    totalCostRevenueByChemist: string;

    // Doctor has to calculate himself if Patient got it tested from the referred center
    medicalTestsReferred: number;
}