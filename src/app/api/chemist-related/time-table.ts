import { Medicine } from "./medicine";

export interface MedicineTimeTable {
    uuid: string;
    
    medicine: Medicine;
    totalQuantity: number;

    // used at per time e.g. 2 tablets in Morning
    intakeQuantityPerTime: number;

    morning: boolean;
    afternoon: boolean;
    evening: boolean;
    night: boolean;

    // by default true, until set un-checkedon UI
    hideEvening: boolean;
}