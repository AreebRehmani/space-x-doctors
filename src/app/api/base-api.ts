import axios from 'axios';
import moment, { Moment } from 'moment';

export const baseRequest = axios.create({
  baseURL: 'http://localhost:5000/api',
});

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

export default baseRequest;