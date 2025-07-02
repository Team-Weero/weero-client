import CreatePost from "../../components/community/CreatePost";
import NameBar from "../../components/community/NameBar";
import Post from "../../components/community/Post";
import Banner from "../../components/system/Banner";
import NavBar from "../../components/system/NavBar";
import styled from "@emotion/styled";

const dummyPosts = [
  {
    id: 1,
    title: "대마고에서 살아남는 꿀팁 공유!!",
    views: 63,
    likes: 63,
    comments: 63,
    author: "주문하신 하마",
    timeAgo: "1시간 전",
  },
  {
    id: 2,
    title: "기말고사 공부 전략 대공개",
    views: 82,
    likes: 45,
    comments: 30,
    author: "똑순이",
    timeAgo: "2시간 전",
  },
  {
    id: 3,
    title: "카페테리아 메뉴 순위 정리!",
    views: 104,
    likes: 77,
    comments: 19,
    author: "먹짱",
    timeAgo: "3시간 전",
  },
  {
    id: 4,
    title: "1학년 프론트엔드 개발자 TMI 모음",
    views: 56,
    likes: 40,
    comments: 12,
    author: "코딩소녀",
    timeAgo: "4시간 전",
  },
  {
    id: 5,
    title: "하마쌤 레전드 어록 정리ㅋㅋ",
    views: 120,
    likes: 99,
    comments: 58,
    author: "유머천재",
    timeAgo: "5시간 전",
  },
  {
    id: 6,
    title: "하마쌤 레전드 어록 정리ㅋㅋ",
    views: 120,
    likes: 99,
    comments: 58,
    author: "유머천재",
    timeAgo: "5시간 전",
  },
];

const WeeCommunity = () => {
  return (
    <Container>
      <NavBar text="또상 게시판" />
      <Banner SmallText="또래 상담부 친구들이 운영하는" BigText="또상 게시판" />
      <NameBar name="또상 게시판" />
      {dummyPosts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          views={post.views}
          likes={post.likes}
          comments={post.comments}
          author={post.author}
          timeAgo={post.timeAgo}
        />
      ))}
      <CreatePost />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default WeeCommunity;
