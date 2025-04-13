import { Admin } from "../admin";
import { MedicalEquipment } from "../chemist-related/medical-equipment";
import { Medicine } from "../chemist-related/medicine";
import { Doctor } from "./doctor";
import { Plan } from "./purchase-plan";
import { Worker } from "./worker";

export interface Hospital {
    uuid: string;

    type: 'Clinic' | 'Hospital'

    name: string;
    city: string;
    state: string;
    country: string;
    pincode: number;

    address: string;

    landMark: string | null;

    doctors: Doctor[];
    workers: Worker[];
    medicines: Medicine[];
    medicalEquipments: MedicalEquipment[];

    isDeleted: boolean;
    allHospitalPlans: Plan[];
    activeHospitalPlan: Plan | null;

    // only this doctor can Delete and Create new Hoispitals, who intially created Hospital and paid money
    createdBydoctor: Doctor;

    createdByAdmin: Admin | null;
}