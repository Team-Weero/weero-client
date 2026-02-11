import { PostType } from "../types/posts.type";
import { client } from "./client";

export const getAllPost = async () => {
  const res = await client.get<PostType[]>("/api/posts");
  return res.data;
};

export const getPostDetail = async (postId: string) => {
  const res = await client.get<PostType>(`/api/posts/${postId}`);
  return res.data;
};
