import { Doctor } from "../doctor-related/doctor";
import { Hospital } from "../doctor-related/hospital";
import { Worker } from "../doctor-related/worker";

export interface MedicalEquipment {
    uuid: string;
    // e.g. injection,  Bhapara Machine etc
    name: string;
    company: string | null;

    hospital: Hospital;

    createdByDoctor: Doctor | null;
    createdByWorker: Worker | null;
}