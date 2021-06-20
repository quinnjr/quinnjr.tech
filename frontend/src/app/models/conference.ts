import { User } from "./user";

export interface Conference {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  user?: User;
}
