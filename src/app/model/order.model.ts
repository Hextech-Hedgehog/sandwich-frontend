import {Entity} from "./entity.model";
import {Sandwich} from "./sandwich.model";

export class Order extends Entity {

  sandwiches: Sandwich[];
  date: Date;

}
