import {Entity} from "./entity.model";

export class User extends Entity {

  password: string;
  firstname: string;
  lastname: string;
  email: string;
}
