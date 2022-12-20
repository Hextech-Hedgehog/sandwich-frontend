import {Entity} from "./entity";
import {User} from "./user";
import {Ingredient} from "./Ingredient";

export class Sandwich extends Entity {

  sandwichName: string;
  shop: string;
  ingredients: Ingredient[];
  asClub: boolean;
  withButter: boolean;
  optionalRequirement?: string;
  user: User;


}
