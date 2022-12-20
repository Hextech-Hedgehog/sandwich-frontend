import {Entity} from "./entity";
import {Sandwich} from "./sandwich";

export class Order extends Entity {

  sandwiches: Sandwich[];
  date: Date;

}
