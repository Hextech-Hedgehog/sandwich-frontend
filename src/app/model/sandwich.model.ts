import {Entity} from "./entity.model";
import {User} from "./user.model";
import {Ingredient} from "./Ingredient.model";

export class Sandwich extends Entity {

  sandwichName: string;
  shop: string;
  ingredients: Ingredient[];
  asClub: boolean;
  withButter: boolean;
  optionalRequirement?: string;
  user: User;


}
