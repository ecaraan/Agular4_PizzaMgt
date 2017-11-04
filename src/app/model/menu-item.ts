import { Ingredient } from './ingredient';

export class MenuItem {
    name: string;
    ingredients: Ingredient[];
    regularPrice: number;
    familyPrice: number;
    partyPrice: number;
    imageUrl: string;
}
