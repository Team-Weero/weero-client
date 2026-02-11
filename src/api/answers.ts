import { client } from "./client";
import { AnswerType } from "../types/answers.type";

export const getAllPost = async (postId: string) => {
  const res = await client.get<AnswerType[]>(`/api/answers/${postId}`);
  return res.data;
};
