import { Doctor } from "../doctor-related/doctor";
import { Appointment } from "./appointment";

export interface Patient {
    uuid: string;

    doctor: Doctor;

    firstName: string;
    lastName: string;
    age: number;

    phoneNumber: string | null;
    dateOfBirth: string | null;

    appointments: Appointment[];

    lastAppointment: Appointment;

    lastPaidAppointmentFee: number;
    lastFeePaidDate: string;
    revisitValidTill: string;

    isDeleted: boolean;
}