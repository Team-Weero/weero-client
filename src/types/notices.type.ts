export interface NoticeType {
  id: string;
  title: string;
  content: string;
  writerId: string;
  createdAt: string;
}

export interface CreateNoticeRequest {
  title: string;
  content: string;
}
