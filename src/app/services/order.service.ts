import { Injectable } from "@angular/core";
import { Sandwich } from "../models/sandwich";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private date: Date;
    private sandwiches: Array<Sandwich> = [];

    constructor() {}

    orderSandwich(sandwich: Sandwich) {
        this.sandwiches.push(sandwich);
    }
}