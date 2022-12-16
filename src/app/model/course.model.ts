import {Entity} from "./entity.model";
import {User} from "./user.model";
import {Session} from "./session.model";

export class Course extends Entity {

  name: string;
  courseParticipants: User[];
  sessions: Session[];

}
