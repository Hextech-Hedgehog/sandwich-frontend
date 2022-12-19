import {Entity} from "./entity";
import {Sandwich} from "./sandwich";

export class Shop extends Entity {

  shopName: string;
  sandwiches: Sandwich[];

}
