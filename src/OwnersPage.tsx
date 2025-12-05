import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import VectorIcon from "./assets/Vector.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./components/Header";
import Toast from "./components/Toast";
import { useLocation } from "react-router-dom";

type Props = {
  userName: string;
  userEmail: string;
  isPeerCounselor?: boolean;
};

const OwnersPage = ({ userName, userEmail, isPeerCounselor }: Props) => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const location = useLocation();
  const toastMessage = location.state?.toastMessage;

  const handleConfirmLogout = () => {
    // TODO: 여기서 실제 로그아웃 로직 (토큰 삭제 등)
    navigate("/login"); // 로그인 페이지 경로에 맞게 수정
  };

  return (
    <>
      {toastMessage && <Toast message={toastMessage} />}
      <PageWrapper>
        <PageHeader title="마이페이지" />

        <UserBlock>
          <Greeting>
            <UserName>{userName}</UserName>
            <Hello> 님, 안녕하세요!</Hello>
            {isPeerCounselor && <PeerBadge>또래상담부</PeerBadge>}
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

          <MenuRow>
            <MenuText>회원정보 수정</MenuText>
            <IconLink to="/profile">
              <RightIcon src={VectorIcon} alt="" />
            </IconLink>
          </MenuRow>

          <MenuRow>
            <MenuText>비밀번호 변경</MenuText>
            <IconLink to="/change">
              <RightIcon src={VectorIcon} alt="" />
            </IconLink>
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

export default OwnersPage;

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

const PeerBadge = styled.span`
  margin-left: 8px;
  padding: 2px 8px;
  height: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: ${({ theme }) => theme.color.main};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
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
  margin-top: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const MenuText = styled.span`
  flex: 1;
`;

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
