import {Entity} from "./entity";
import {Order} from "./order";

export class Bill extends Entity {

  orders: Order[];
  billDate: Date;

}
