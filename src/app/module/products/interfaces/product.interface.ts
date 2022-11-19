import { IRate } from "./rating.interface";

export interface IProduct {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: IRate;
    title: string;
}

export interface INewProduct extends Omit<IProduct, "id"> {}