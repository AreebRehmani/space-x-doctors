import { PayementType } from "../patient-related/appointment";
import { Pricing } from "../pricing";
import { Hospital } from "./hospital";

export interface Plan {
    uuid: string;

    hospital: Hospital;
    allowedDoctors: number;

    payment: number;
    paymentType: PayementType;
    paymentNote: string | null;

    planPurchaseDate: string | null;
    planExpiryDate: string | null;

    isPlanExpired: boolean;

    // use latest values from Pricing.ts to save here below feilds
    planType: 'Monthly' | 'Yearly' | 'Free Trial' | null;

    // price is per hospital * number of doctors allowed
    //e.g. for 3 doctore in 1 hospital = 3*2000 Rs monthly
    pricingPerDoctorMonthly: number;
    pricingPerDoctorAnually: number;
}

export const isPlanValid = (plan: Plan) => {
    return !plan.isPlanExpired && plan.planType !== null && plan.planPurchaseDate !== null;
}