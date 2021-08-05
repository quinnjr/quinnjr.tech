import { User } from "./user";

export interface Experience {
  id: string;
  employer: string;
  title: string;
  location: string;
  startYear: number;
  endYear: number | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user?: User;
}
