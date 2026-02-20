export interface PostType {
  id: string;
  title: string;
  nickName: string;
  viewCount: number;
  heartCount: number;
  hearted: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface PostDetailType extends PostType {
  content: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
}
