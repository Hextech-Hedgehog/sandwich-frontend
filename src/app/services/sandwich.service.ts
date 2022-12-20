import { Injectable } from "@angular/core";
import { Sandwich } from "../models/sandwich";


@Injectable({
    providedIn: 'root'
})
export class SandwichService {

    private sandwiches: Array<Sandwich>;
    
    constructor() {
        /*this.sandwiches = [
            {

            }
        ];*/
    }

}