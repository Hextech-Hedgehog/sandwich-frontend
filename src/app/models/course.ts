import {Entity} from "./entity";
import {User} from "./user";
import {Session} from "./session";

export class Course extends Entity {

  name: string;
  courseParticipants: User[];
  sessions: Session[];

}
