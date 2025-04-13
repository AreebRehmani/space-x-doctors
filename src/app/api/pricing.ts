export interface Pricing {
    planType: 'Monthly' | 'Yearly' | 'Free Trial' | null;

    // price is per hospital * number of doctors allowed
    //e.g. for 3 doctore in 1 hospital = 3*2000 Rs monthly
    pricingPerDoctorMonthly: number;
    pricingPerDoctorAnually: number;
}