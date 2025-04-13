import { Hospital } from "../doctor-related/hospital";

export interface MedicalTest {
    name: string;

    hospital: Hospital;

    testNote: string | null;

    // Doctor will put suggested Medcial Center's Address for commision
    suggestedMedicalCenter: string;
}