export interface PostType {
  id: string;
  title: string;
  views: number;
  content: string;
  likes: number;
  comments: number;
  nickName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
}
