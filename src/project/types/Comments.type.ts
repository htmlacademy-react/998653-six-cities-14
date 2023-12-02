
 type Comment = CommentByOfferId & {
  date: string;
  id: number;
  user: User;
}

type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type CommentByOfferId = {
  comment: string;
  rating: number;
}

export type { Comment, CommentByOfferId };
