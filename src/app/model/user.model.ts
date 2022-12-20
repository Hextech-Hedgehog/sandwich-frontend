import {Entity} from "./entity.model";

export class User extends Entity {

  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  token: any;
}
