import { MedicalEquipment } from "../chemist-related/medical-equipment";
import { MedicalTest } from "../chemist-related/medical-test";
import { MedicineTimeTable } from "../chemist-related/time-table";
import { Doctor } from "../doctor-related/doctor";
import { Appointment } from "./appointment";
import { Patient } from "./patient";

export interface Prescription {
    uuid: string;

    medicineTimeTables: MedicineTimeTable[];

    medicalEquipments: MedicalEquipment[];

    medicalTests: MedicalTest[];

    date: string;

    patient: Patient;
    doctor: Doctor;

    // Chemist has to mark true, if sold successfully
    delivered: boolean;

    appointment: Appointment;
}