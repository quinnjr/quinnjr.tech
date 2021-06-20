import { User } from "./user";

export interface Certification {
  id: string;
  name: string;
  certifier: string;
  userId: string;
  user?: User;
}
