import { PostType, CreatePostRequest } from "../types/posts.type";
import { client } from "./client";

export const getAllPost = async () => {
  const res = await client.get<PostType[]>("/api/posts");
  return res.data;
};

export const getPostDetail = async (postId: string) => {
  const res = await client.get<PostType>(`/api/posts/${postId}`);
  return res.data;
};

export const createPost = async (payload: CreatePostRequest) => {
  const res = await client.post<PostType>("/api/posts", payload);
  return res.data;
};

export const updatePost = async (
  postId: string,
  payload: CreatePostRequest,
) => {
  const res = await client.patch<PostType>(`/api/posts/${postId}`, payload);
  return res.data;
};

export const deletePost = async (postId: string) => {
  const res = await client.delete(`/api/posts/${postId}`);
  return res.data;
};
