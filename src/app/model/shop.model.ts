import {Entity} from "./entity.model";
import {Sandwich} from "./sandwich.model";

export class Shop extends Entity {

  shopName: string;
  sandwiches: Sandwich[];

}
