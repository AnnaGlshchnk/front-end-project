import {City} from './city';

export interface Tour {
    tourName: string;
    price: number;
    country: string;
    city: City;
    description: string;
}
