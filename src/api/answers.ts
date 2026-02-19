import { client } from "./client";
import { AnswerType } from "../types/answers.type";

export const getAnswers = async (postId: string) => {
  const res = await client.get<{ answers: AnswerType[] }>(
    `/api/answers/${postId}`,
  );
  return res.data.answers;
};

export const createAnswer = async (postId: string, answer: string) => {
  const res = await client.post<AnswerType>(`/api/answers/${postId}`, {
    answer,
  });
  return res.data;
};

export const likeAnswer = async (answerId: string) => {
  await client.post(`/api/answers/${answerId}/heart`);
};

export const deleteAnswer = async (answerId: string) => {
  await client.delete(`/api/answers/${answerId}`);
};
