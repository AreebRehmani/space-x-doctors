import { Doctor } from "./doctor";
import { Worker } from "./worker";

export interface DoctorTimings {
    uuid: string;
    doctor: Doctor;

    startTime: string;
    endTime: string;

    availableWeekDays: Weekdays[];

    appointmentFee: number;
}

export interface WorkerTimings {
    uuid: string;
    worker: Worker;

    startTime: string;
    endTime: string;

    availableWeekDays: Weekdays[];
};

export enum Weekdays {
    SUNDAY = 'Sun',
    MONDAY = 'Mon',
    TUESDAY = 'Tue',
    WEDNESDAY = 'Wed',
    THURSDAY = 'Thu',
    FRIDAY = 'Fri',
    SATURDAY = 'Sat',
};
