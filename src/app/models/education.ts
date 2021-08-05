import { User } from "./user";

export interface Education {
  id: string;
  name: string;
  location: string;
  degree: string;
  graduationYear: number | null;
  activities: string[];
  userId: string;
  user?: User;
}
