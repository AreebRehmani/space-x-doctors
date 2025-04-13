import { Doctor } from "../doctor-related/doctor";
import { Patient } from "./patient";
import { Prescription } from "./prescription";

export interface Appointment {
    uuid: string;

    pateint: Patient;
    doctor: Doctor;

    date: string;
    appointmentFee: number | null;

    revisiting: boolean;

    feePaid: boolean;
    paymentType: PayementType;
    paymentNote: string | null;
    paidOn: string | null;

    prescription: Prescription | null;

    noteByReceptionist: string | null;

    currentSituationNote?: string;
    improvementNote?: string;
}

export enum PayementType {
    CASH = 'Cash',
    UPI = 'UPI',
    CARD = 'Card',
    BANK_TRANSFER = 'Bank Transfer',
    ONLINE = 'Online',
    NOT_REQUIRED = 'Not Required',
    OTHERS = 'Others'
};