import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RecentWorryItem from "./RecentWorryItem";
import { apiClient } from "../../api/client";

interface Post {
  id: string;
  title: string;
  createdAt: string;
}

const RecentWorryList = () => {
  const [worries, setWorries] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.get("/api/posts");

        const latestThree = response.data.posts
          .sort(
            (a: Post, b: Post) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 3)
          .map((post: Post) => post.title);

        setWorries(latestThree);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ListWrapper>
      {worries.map((worry, idx) => (
        <RecentWorryItem key={idx} text={worry} />
      ))}
    </ListWrapper>
  );
};

export default RecentWorryList;

const ListWrapper = styled.div`
  width: 100%;
`;
