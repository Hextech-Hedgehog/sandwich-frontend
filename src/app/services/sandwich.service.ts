import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import { environment } from "src/environment/environment";
import { Sandwich } from "../models/sandwich";
import { Crud, CrudConfig } from "./crud";
import { IngredientService } from "./ingredients.service";

const config: CrudConfig = {
    //change back to sandwich
    many: 'user',
    single: (id) => `sandwich/${id}`
}

@Injectable({
    providedIn: 'root'
})
export class SandwichService extends Crud<Sandwich> {

    private sandwiches: Array<Sandwich>;
    
    constructor(private ingredientServ: IngredientService,
        protected httpC: HttpClient) {
        super(httpC, config);
        const ingredients = this.ingredientServ.getIngredients;

        this.sandwiches = [
            {
                id: 1,
                sandwichName: 'Meat ball',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[2], ingredients[3]],
                price: 4.20,
                img: ''
            },
            {
                id: 2,
                sandwichName: 'Ham',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[2], ingredients[4], ingredients[5], ingredients[6], ingredients[7], ingredients[12]],
                price: 4.60,
                img: ''
            },
            {
                id: 3,
                sandwichName: 'Roasted beef',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[3], ingredients[9], ingredients[10]],
                price: 4.80,
                img: ''
            },
            {
                id: 4,
                sandwichName: 'Martino',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[3], ingredients[10]],
                price: 5.50,
                img: ''
            },
            {
                id: 5,
                sandwichName: 'Salami',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[3], ingredients[11]],
                price: 4.20,
                img: ''
            },
            {
                id: 6,
                sandwichName: 'Special',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[6], ingredients[8], ingredients[9], ingredients[14]],
                price: 5.60,
                img: ''
            },
            {
                id: 7,
                sandwichName: 'Club',
                shop: 'Vleugels',
                ingredients: [ingredients[1], ingredients[3], ingredients[16], ingredients[17]],
                price: 5.50,
                img: ''
            },
        ];
    }

    get getSandwiches(){
        return this.sandwiches;
    }

    public getSandwichesByKeywords(keywords: string) {
        let sandwichesResult = this.sandwiches.filter(s => s.sandwichName.toLowerCase().includes(keywords));
        //return of(sandwichesResult);//.pipe(map(res => res.map(s => new Sandwich(s))));
        let result = this.http.get<Sandwich[]>(`${environment.api.url}${this.config.many}/sandwich/${keywords}`).pipe(map(res => res.map(s => new Sandwich(s))));
        result.subscribe(s => {
            console.log(s);
        });
        return result;
    }
    
}