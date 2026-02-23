import { client } from "./client";
import { SignupRequest, SignupResponse, SigninRequest, SigninResponse } from "../types/auth.type";
import { CurrentUserResponse } from "../types/auth.type";

export const signup = async (
  payload: SignupRequest,
): Promise<SignupResponse> => {
  const res = await client.post<SignupResponse>(
    "/api/auth/signup",
    payload,
  );

  return res.data;
};

export const signin = async (
  payload: SigninRequest,
): Promise<SigninResponse> => {
  const res = await client.post<SigninResponse>(
    "/api/auth/signin",
    payload,
  );
  return res.data;
};

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const res = await client.get<CurrentUserResponse>("/api/auth/me");
  return res.data;
};