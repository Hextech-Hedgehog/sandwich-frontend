import {Entity} from "./entity";
import {User} from "./user";
import {Order} from "./order";

export class Session extends Entity {


  sessionName: string;
  instructor: User;
  startDate: Date;
  endDate: Date;
  dailyOrder: Order;

}
