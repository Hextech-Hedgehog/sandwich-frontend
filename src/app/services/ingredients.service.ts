import { Injectable } from "@angular/core";
import { Ingredient } from "../models/Ingredient";


@Injectable({
    providedIn: 'root'
})
export class IngredientService 
{
    private ingredients: Array<Ingredient>;

    constructor() {
        this.ingredients = [
            {id: 1, name:'Bread'}, 
            {id: 2, name: 'Beef'}, 
            {id: 3, name: 'Mayonnaise'}, 
            {id: 4, name: 'Eggs'}, 
            {id: 5, name: 'Onions'}, 
            {id: 6, name: 'Tomatoes'},
            {id: 7, name: 'Pickles'}, 
            {id: 8, name: 'Ham'}, 
            {id: 9, name: 'Salad'}, 
            {id: 10, name: 'Salami'},
            {id: 11, name: 'Roasted beef'}, 
            {id: 12, name: 'Martino sauce'}, 
            {id: 13, name: 'Eggplant'},
            {id: 14, name: 'Cheese'}, 
            {id: 15, name: 'Carrots'},
            {id: 16, name: 'Bacon'}, 
            {id: 17, name: 'Honey'}
        ]
    }

    get getIngredients() {
        return this.ingredients;
    }
}