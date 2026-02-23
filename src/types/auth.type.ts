export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  authority: "STUDENT";
  accountId: string;
  nickname: string;
  grade: number;
  classRoom: number;
  number: number;
  deviceToken: string;
}

export interface SignupResponse {
  message?: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredAt: string;
  refreshTokenExpiredAt: string;
  authority: "STUDENT" | string;
}

export interface CurrentUserResponse {
  id: string;
  email: string;
  authority: string;
  name: string;
  nickname: string;
  accountId: string;
  grade: number;
  classRoom: number;
  number: number;
  role: string;
}