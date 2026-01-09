import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/system/NavBar";
import Banner from "../components/system/Banner";
import RecentWorryList from "../components/home/RecentWorryList";

const HomePage = () => {
  return (
    <>
      <NavBar text="홈" />
      <Banner
        SmallText="DSM 학생들을 위한 따뜻한 상담 서비스"
        BigText="Wee 위로에서"
        EctText="만나보세요"
      />
      <MiddleDiv>
        <OneText>상담실은 언제나 열려있습니다</OneText>
        <TwoText>상담 신청하러 가기</TwoText>
      </MiddleDiv>

      <RecentWorryDiv>
        <WorryText>
          최근 친구들의 <P>고민</P>은?
        </WorryText>
        <WorrySmallText>
          친구들의 고민을 들어주고 내 고민도 풀어보아요
        </WorrySmallText>
        <RecentWorryList />
      </RecentWorryDiv>
    </>
  );
};

export default HomePage;

const MiddleDiv = styled.button`
  border: 1px solid ${theme.color.main};
  height: 68px;
  border-radius: 20px;
  width: 90%;
  max-width: 480px;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: white;
`;

const OneText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

const TwoText = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
`;

const RecentWorryDiv = styled.div`
  border: 1px solid ${theme.color.main};
  height: 209px;
  border-radius: 20px;
  width: 90%;
  max-width: 480px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

const WorryText = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;
`;

const WorrySmallText = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const P = styled.span`
  color: ${theme.color.main};
`;
