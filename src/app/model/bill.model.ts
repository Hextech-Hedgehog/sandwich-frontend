import {Entity} from "./entity.model";
import {Order} from "./order.model";

export class Bill extends Entity {

  orders: Order[];
  billDate: Date;

}
