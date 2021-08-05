import { User } from "./user";

export interface Project {
  id: string;
  name: string;
  url: string;
  content: string;
  description: string;
  userId: string;
  user?: User;
}
