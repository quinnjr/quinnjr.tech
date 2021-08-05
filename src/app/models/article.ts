import { User } from "./user";

export interface Article {
  id: string;
  title: string;
  titleSlug: string;
  authorId: string;
  author?: User;
  content: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
