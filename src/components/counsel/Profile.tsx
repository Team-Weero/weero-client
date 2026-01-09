import styled from "styled-components";
import { theme } from "../../style/theme";
import Logo from "../../assets/logo.svg";

const ProfileComponent = () => {
  return (
    <Profile>
      <img src={Logo} alt="프로필" />
    </Profile>
  );
};

export default ProfileComponent;

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
