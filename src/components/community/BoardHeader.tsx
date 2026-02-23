import styled from "@emotion/styled";
import arrow from "../../assets/arrow.svg";
import dot from "../../assets/dot-gray.svg";
import view from "../../assets/open-eye.svg";
import { theme } from "../../style/theme";
import { Link, useNavigate } from "react-router-dom";

interface Prop {
  title: string;
  author: string;
  date: string;
  views: number;
}

const formatDate = (date: string) => {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
};

const BoardHeader = ({ title, author, date, views }: Prop) => {
  const navigate = useNavigate();
  return (
    <Container>
      <TopSection>
        <img onClick={() => navigate("/")} src={arrow} alt="뒤로 가기" />
        또상 게시판
      </TopSection>
      <TitleSection>
        <Title>{title}</Title>
        <ItemWrap>
          {author}
          <img src={dot} alt="" />
          {formatDate(date)}
          <img src={dot} alt="" />
          <Item>
            <img src={view} alt="" />
            {views}
          </Item>
        </ItemWrap>
      </TitleSection>
    </Container>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.gray[1]};
`;
const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  color: black;
  img {
    position: absolute;
    left: 0;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0 10px 12px;
  gap: 36px;
  border-bottom: 1px solid ${theme.color.gray[3]};
`;

export default BoardHeader;
