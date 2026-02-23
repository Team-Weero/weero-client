import styled from "@emotion/styled";
import arrow from "../assets/arrow_right.svg";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Toast from "../components/Toast";
import PageHeader from "../components/Header";
import { getCurrentUser } from "../api/auth";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toastMessage = location.state?.toastMessage;

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

useEffect(() => {
  const fetchUser = async () => {
    try {
      const me = await getCurrentUser();

      setUserEmail(me.email);
      setUserName(me.name);
    } catch {
      // navigate("/login");
    }
  };

  fetchUser();
}, [navigate]);

  const handleConfirmLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login", {
      state: { toastMessage: "로그아웃 되었습니다" },
    });
  };

  return (
    <>
      {toastMessage && <Toast message={toastMessage} />}
      <PageWrapper>
        <PageHeader title="마이페이지" />

        <UserBlock>
          <Greeting>
            <UserName>{userName || "사용자"}</UserName>
            <Hello> 님, 안녕하세요!</Hello>
          </Greeting>
          <Email>{userEmail}</Email>
        </UserBlock>

        <Line>
          <Divider2 style={{ marginTop: 32 }} />
        </Line>

        <Section>
          <SectionTitle>관리</SectionTitle>

          <MenuRow>
            <MenuText>내 게시글 관리</MenuText>
            <IconLink to="/myposts">
              <RightIcon src={VectorIcon} alt="" />
            </IconLink>
          </MenuRow>
        </Section>

        <Line>
          <Divider2 style={{ marginTop: 44 }} />
        </Line>

        <Section>
          <SectionTitle>계정 설정</SectionTitle>

          <MenuRow onClick={() => navigate("/profile")}>
            <MenuText>회원정보 수정</MenuText>
            <RightIcon src={arrow} alt="" />
          </MenuRow>

          <MenuRow onClick={() => navigate("/change")}>
            <MenuText>비밀번호 변경</MenuText>
            <RightIcon src={arrow} alt="" />
          </MenuRow>

          <MenuRow>
            <MenuText>로그아웃</MenuText>
            <IconButton type="button" onClick={() => setIsLogoutOpen(true)} aria-label="로그아웃">
              <RightIcon src={VectorIcon} alt="" />
            </IconButton>
          </MenuRow>
        </Section>

        {isLogoutOpen && (
          <>
            <DimmedOverlay onClick={() => setIsLogoutOpen(false)} />
            <ModalWrapper role="dialog" aria-modal="true">
              <ModalText>로그아웃 하시겠습니까?</ModalText>
              <ModalButtons>
                <CancelButton onClick={() => setIsLogoutOpen(false)}>취소</CancelButton>
                <LogoutButton onClick={handleConfirmLogout}>로그아웃</LogoutButton>
              </ModalButtons>
            </ModalWrapper>
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default MyPage;

/* ===== 스타일 ===== */

const PageWrapper = styled.div`
  position: relative;
`;

const Divider2 = styled.hr`
  width: 362px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[3]};
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
`;

const UserBlock = styled.section`
  margin-top: 56px;
  margin-left: 20px;
`;

const Greeting = styled.p`
  display: flex;
  align-items: baseline;
`;

const UserName = styled.strong`
  font-size: 24px;
  margin-right: 4px;
`;

const Hello = styled.span`
  font-size: 16px;
  line-height: 1.2;
`;

const Email = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray[1]};
`;

const Section = styled.section`
  margin-left: 20px;
`;

const SectionTitle = styled.h2`
  margin: 28px 0px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray[1]};
`;

const MenuRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const MenuText = styled.span``;

const RightIcon = styled.img`
  margin-top: 5px;
  display: block;
`;

const IconLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const DimmedOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 224px;
  height: 96px;
  padding: 20px 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 11;
`;

const ModalText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const ModalButtons = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const CancelButton = styled.button`
  width: 45px;
  height: 26px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.color.gray[4]};
  color: ${({ theme }) => theme.color.gray[1]};
  font-size: 12px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  width: 66px;
  height: 26px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.color.error};
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
`;