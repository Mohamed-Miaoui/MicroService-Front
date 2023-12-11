import {User} from "../user/user";

export class Notification {
    idNotification: number;
    title: string;
    description: string;
    creationDate: Date;
    user: User;
}
