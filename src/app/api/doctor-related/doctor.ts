import { Hospital } from "./hospital";
import { Patient } from "../patient-related/patient";
import { Plan } from "./purchase-plan";
import { Role } from "../role";
import { DoctorTimings } from "./timings";
import { Worker } from "./worker";
import { DailyRevenue } from "./daily-revenue";
import { MonthlyRevenue } from "./monthly-revenue";
import { CustomRevenue } from "./custom-revenue";

export interface Doctor {
    uuid: string;

    firstName: string;
    lastName: string;
    username: string;
    dateOfBirth: string | null;

    email: string;
    contactNumber: string;
    emergencyContactNumber: string | null;
    address: string | null;

    joiningDate: string;
    leavingDate: string | null;

    role: Role.DOCTOR;

    // e.g. can sit 2 times in a day
    doctorTimings: DoctorTimings[];

    // Doctor has many to many relation with Hospital
    hospitals: Hospital[];

    // Doctor has one to many realtion with Patient
    patients: Patient[];

    dailyRevenues: DailyRevenue[];
    monthlyRevenues: MonthlyRevenue[];

    // custom Revenue is a search result Query
    customRevenue: CustomRevenue;

    disabled: boolean;

    lastLogin: string;

    isDeleted: boolean;

    // prevent Doctor create a new hospital with Free Trial Plan
    exhaustedHisTrial: boolean;
}