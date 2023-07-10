export interface HistoryType {
  title: string;
  count: number;
  date: string;
}

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  history: HistoryType[];
}
