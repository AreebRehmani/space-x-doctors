import { Hospital } from "./hospital";
import { Patient } from "../patient-related/patient";
import { Plan } from "./purchase-plan";
import { Role } from "../role";
import { DoctorTimings } from "./timings";
import { Worker } from "./worker";

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

    hospitals: Hospital[];

    patients: Patient[];

    disabled: boolean;

    lastLogin: string;

    isDeleted: boolean;

    // prevent Doctor create a new hospital with Free Trial Plan
    exhaustedHisTrial: boolean;
}