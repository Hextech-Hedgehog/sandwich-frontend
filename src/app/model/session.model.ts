import {Entity} from "./entity.model";
import {User} from "./user.model";
import {Order} from "./order.model";

export class Session extends Entity {


  sessionName: string;
  instructor: User;
  startDate: Date;
  endDate: Date;
  dailyOrder: Order;

}
