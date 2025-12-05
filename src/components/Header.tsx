import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <>
    <HeaderBar>
      <BackButton type="button" onClick={() => navigate("/mypage")}>
        <img src={ArrowIcon} alt="뒤로가기" />
      </BackButton>

      <HeaderTitle>{title}</HeaderTitle>
    </HeaderBar>
    <Divider />
    </>
  );
};

export default PageHeader;

const HeaderBar = styled.header`
  position: relative;
  margin-top: 70px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[3]};
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;
