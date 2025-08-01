import styled from "@emotion/styled";
import { theme } from "../../style/theme";
import logo from "../../assets/logo.svg";

const AlarmItem = () => {
  return (
    <Container>
      <Profile>
        <img src={logo} alt="프로필" />
      </Profile>
      <Content>
        <b>선생님</b>이 메시지를 보냈습니다: 무슨 일이니 친구야
      </Content>
    </Container>
  );
};

const Content = styled.div`
  width: 232px;
  font-size: 15px;
  font-weight: 400;
`;
const Profile = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.color.gray[3]};
  border-radius: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 26px;
  }
`;
const Container = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export default AlarmItem;
