import { IUser } from './user.interface';

export interface IPost {
  id: string;
  content: string;
  images?: string[];
  author: IUser;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostResponse {
  post: IPost;
  isLiked?: boolean;
} 