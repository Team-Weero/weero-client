import { CreateNoticeRequest, NoticeType } from "../types/notices.type";
import { client } from "./client";

export const getAllNotice = async () => {
  const res = await client.get<{ posts: NoticeType[] }>("/api/notices");
  return res.data.posts;
};

export const getPostDetail = async (postId: string) => {
  const res = await client.get<NoticeType>(`/api/notices/${postId}`);
  return res.data;
};

export const createPost = async (payload: CreateNoticeRequest) => {
  const res = await client.post<NoticeType>("/api/notices", payload);
  return res.data;
};

export const updatePost = async (
  postId: string,
  payload: CreateNoticeRequest,
) => {
  const res = await client.patch<NoticeType>(`/api/notices/${postId}`, payload);
  return res.data;
};

export const deletePost = async (postId: string) => {
  const res = await client.delete(`/api/notices/${postId}`);
  return res.data;
};
