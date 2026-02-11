import { client } from "./client";
import { AnswerType } from "../types/answers.type";

export const getAnswers = async (postId: string) => {
  const res = await client.get<AnswerType[]>(`/api/answers/${postId}`);
  return res.data;
};

export const createAnswer = async (postId: string, answer: string) => {
  const res = await client.post<AnswerType>(`/api/answers/${postId}`, {
    answer,
  });
  return res.data;
};
