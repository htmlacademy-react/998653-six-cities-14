export type CommentsProps = Comment[]

export type Comment = CommentByOfferId & {
  date: string;
  id: number;
  user: User;
}

export interface User {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface CommentByOfferId {
  comment: string;
  rating: number;
}
