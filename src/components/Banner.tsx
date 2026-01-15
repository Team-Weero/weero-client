import styled from "@emotion/styled";
import { theme } from "../style/theme";
import backToSchool from "../assets/back-to-school.svg";

interface Props {
  SmallText: string;
  BigText: string;
  EctText?: string;
}

const Banner = ({ SmallText, BigText, EctText }: Props) => {
  return (
    <BannerContainer>
      <ContentBlock>
        <Texts>
          <BannerSmallText>{SmallText}</BannerSmallText>
          <BannerBigText>{BigText}</BannerBigText>
          {EctText && <BannerBigText>{EctText}</BannerBigText>}
        </Texts>
        <BannerImage src={backToSchool} alt="배너이미지" />
      </ContentBlock>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 244px;
  background-color: ${theme.color.main};
`;

const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 217px;
  height: 101px;
  p {
    color: white;
  }
`;

const BannerImage = styled.img`
  width: 140px;
  height: 140px;
`;

const BannerBigText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-wrap: nowrap;
`;

const BannerSmallText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-wrap: nowrap;
`;

export default Banner;
