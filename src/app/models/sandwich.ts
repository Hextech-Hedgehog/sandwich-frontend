import {Entity} from "./entity";
import {User} from "./user";
import {Ingredient} from "./Ingredient";

export class Sandwich extends Entity {

  sandwichName: string;
  shop: string;
  ingredients?: Ingredient[];
  price?: number;
  img?: string;
  asClub?: boolean;
  withButter?: boolean;
  optional?: string;
  user?: User;

  constructor(data?: any){
    super();
    if(data){
        this.id = data.id;
        this.sandwichName = data.sandwichName;
        this.shop = data.shop;
        this.ingredients = data.ingredients;
        this.price = data.price;
        this.asClub = data.asClub;
        this.withButter = data.withButter;
        this.optional = data.optional;
        this.user = data.user;
    }
}

}
