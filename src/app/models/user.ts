import { Role } from './role';

export interface User {
  id: string;
  email: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  profilePicture: string | null;
  profile: string;
  skills: string[];
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
