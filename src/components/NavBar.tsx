import styled from "@emotion/styled";
import { theme } from "../style/theme";
import bell from "../assets/bell.svg";
import person from "../assets/person.svg";

interface Prop {
  text: string;
}

const NavBar = ({ text }: Prop) => {
  const navItems = ["홈", "게시판", "또상 게시판", "상담", "상담 신청"];
  return (
    <NavContainer>
      <NavSection>
        <Wrap>
          <h2>{text}</h2>
          <IconWrap>
            <img src={bell} alt="알림" />
            <MypageIcon>
              <img src={person} alt="마이페이지" />
            </MypageIcon>
          </IconWrap>
        </Wrap>
      </NavSection>
      <Bar>
        {navItems.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Bar>
    </NavContainer>
  );
};

const Item = styled.div`
  height: 32px;
  display: flex;
  align-items: flex-start;
`;
const Bar = styled.nav`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid ${theme.color.main};
  font-size: 15px;
  font-weight: 600;
`;
const MypageIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 40px;
  background-color: ${theme.color.gray[1]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  img {
    width: 24px;
    height: 24px;
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const NavSection = styled.section`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: flex-end;
  padding: 0 20px 18px 28px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid ${theme.color.gray[3]};
`;
const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default NavBar;
