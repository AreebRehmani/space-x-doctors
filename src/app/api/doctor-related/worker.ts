import { Hospital } from "./hospital";
import { Doctor } from "./doctor";
import { Plan } from "./purchase-plan";
import { Role } from "../role";
import { WorkerTimings } from "./timings";

export interface Worker {
    uuid: string;

    firstName: string;
    lastName: string;
    username: string;
    dateOfBirth: string | null;

    email: string | null;
    contactNumber: string | null;
    emergencyContactNumber: string | null;

    joiningDate: string;
    leavingDate: string | null;

    monthlySalary: number | null;

    // Can be Manager, Chemist, Staff (nurse,receptionist etc)
    role: Role.MANAGER | Role.CHEMIST | Role.STAFF;

    // Receptionist, Nurse, Assistant, Trainee etc
    workerType: string | null;

    address: string | null;

    // if there is only one doctor, we auto populate for workers to ease in Appoinmtent/work
    preferredDoctor: Doctor | null;

    workerTimings: WorkerTimings[];
    hospital: Hospital;

    disabled: boolean;

    lastLogin: string;

    isDeleted: boolean;
}