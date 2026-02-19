export interface NoticeType {
  id: string;
  title: string;
  nickName: string;
  viewCount: number;
  heartCount: number;
  hearted: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface NoticeDetailType extends NoticeType {
  content: string;
}

export interface CreateNoticeRequest {
  title: string;
  content: string;
}
