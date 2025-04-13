import { Doctor } from "../doctor-related/doctor";
import { Hospital } from "../doctor-related/hospital";
import { Worker } from "../doctor-related/worker";

export interface Medicine {
    uuid: string;

    name: string;
    company: string | null;
    type: MedicineForm;

    hospital: Hospital;

    pricePerItem: string;
    profitPerItem: string | null;

    createdByDoctor: Doctor | null;
    createdByWorker: Worker | null;
}

export enum MedicineForm {
    TABLET = 'Tablet',
    CAPSULE = 'Capsule',
    INJECTION = 'Injection',
    SYRUP = 'Syrup',
    CREAM = 'Cream',
    GEL = 'Gel',
    POWDER = 'Powder',
    LOTION = 'Lotion',
    OINTMENT = 'Ointment',
    SUSPENSION = 'Suspension',
    SOLUTION = 'Solution',
    DROPS = 'Drops',
    PATCH = 'Patch',
    SUPPOSITORY = 'Suppository',
    AEROSOL = 'Aerosol',
    GRANULES = 'Granules'
}
