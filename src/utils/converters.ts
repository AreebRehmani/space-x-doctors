import moment, { Moment } from "moment";

/**
 * Format date as "31, Jan 2025"
 */
export const getDateForUI = (date: Date): string => {
    return moment(date).format('DD, MMM YYYY');
};

/**
 * Format date as "31, Jan 2025 12:15AM"
 */
export const getTimeAndDateForUI = (date: Date): string => {
    return moment(date).format('DD, MMM YYYY hh:mmA');
};

export const parseDateFromUI = (dateString: string): Moment => {
    return moment(dateString, 'DD, MMM YYYY', true);
};

export const parseDateTimeFromUI = (dateTimeString: string): Moment => {
    return moment(dateTimeString, 'DD, MMM YYYY hh:mmA', true);
};

/**
 * Format date as "12:15AM"
 */
export const getOnlyTimeForUI = (date: Date): string => {
    return moment(date).format('hh:mmA');
};

export const decimalToString = (value: number): string => {
    return value.toString();
}

export const stringToDecimal = (value: string): number => {
    return Number(value);
}

export const toIndianFormat = (value: number): string => {
    const [integerPart, decimalPart] = Math.abs(value).toString().split('.');
    const formatter = new Intl.NumberFormat('en-IN', { useGrouping: true });

    // Format integer part with Indian numbering
    const formattedInteger = formatter.format(parseInt(integerPart));

    // Force exactly 2 decimal places [[7]][[8]]
    const formattedDecimal = decimalPart
        ? decimalPart.slice(0, 2).padEnd(2, '0')
        : '00';

    const sign = value < 0 ? '-' : '';
    return `${sign}${formattedInteger}.${formattedDecimal}`;
}
