import styled from "@emotion/styled";
import arrow from "../../assets/arrow.svg";
import dot from "../../assets/dot-gray.svg";
import view from "../../assets/open-eye.svg";
import { theme } from "../../style/theme";
import { Link } from "react-router-dom";

interface Prop {
  community: string;
  title: string;
  author: string;
  date: string;
  views: number;
}

const BoardHeader = ({ community, title, author, date, views }: Prop) => {
  return (
    <Container>
      <TopSection>
        <Link to="/wee-community">
          <img src={arrow} alt="뒤로 가기" />
        </Link>

        {community}
      </TopSection>
      <TitleSection>
        <Title>{title}</Title>
        <ItemWrap>
          {author}
          <img src={dot} alt="" />
          {date}
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
