import { Doctor } from "../doctor-related/doctor";
import { Hospital } from "../doctor-related/hospital";

export interface MedicalTest {
    name: string;

    requestedByHospital: Hospital;
    requestedByDoctor: Doctor;

    testNote: string | null;

    // Doctor will put suggested Medcial Center's Address for commision
    suggestedMedicalCenter: string;
}