import styled from "@emotion/styled";
import { theme } from "../style/theme";
import NavBar from "../components/system/NavBar";
import { useState } from "react";
import CategoryList from "../components/CategoryList";

const CounselApply = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [hasExperience, setHasExperience] = useState<boolean | null>(null);

  const isFormValid = Boolean(
    selectedCategory && gender !== null && hasExperience !== null
  );

  return (
    <Container>
      <NavBar text="상담 신청" />

      <Content>
        <Section>
          <SectionTitle>
            <Highlight>상담 카테고리</Highlight>를 선택하세요
          </SectionTitle>
          <SectionDescription>
            선택한 카테고리를 기반으로 상담 주제가 설정됩니다.
          </SectionDescription>

          <CategorySection>
            <CategoryList
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </CategorySection>
        </Section>

        <Section>
          <SectionTitle>
            <Highlight>상담을 위한 기본정보</Highlight>를 선택하세요
          </SectionTitle>
          <SectionDescription>
            입력한 정보는 담당 선생님에게만 공유돼요.
          </SectionDescription>

          <FormSection>
            <FormGroup>
              <FormLabel>성별</FormLabel>
              <RadioGroup>
                <RadioWrapper>
                  <RadioInput
                    type="radio"
                    id="female"
                    name="gender"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  <RadioLabel htmlFor="female">여자</RadioLabel>
                </RadioWrapper>
                <RadioWrapper>
                  <RadioInput
                    type="radio"
                    id="male"
                    name="gender"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  <RadioLabel htmlFor="male">남자</RadioLabel>
                </RadioWrapper>
              </RadioGroup>
            </FormGroup>

            <FormGroup>
              <FormLabel>상담 / 지도 경험</FormLabel>
              <RadioGroup>
                <RadioWrapper>
                  <RadioInput
                    type="radio"
                    id="yes"
                    name="experience"
                    checked={hasExperience === true}
                    onChange={() => setHasExperience(true)}
                  />
                  <RadioLabel htmlFor="yes">유</RadioLabel>
                </RadioWrapper>
                <RadioWrapper>
                  <RadioInput
                    type="radio"
                    id="no"
                    name="experience"
                    checked={hasExperience === false}
                    onChange={() => setHasExperience(false)}
                  />
                  <RadioLabel htmlFor="no">무</RadioLabel>
                </RadioWrapper>
              </RadioGroup>
            </FormGroup>
          </FormSection>
        </Section>

        <ButtonWrapper>
          <SubmitButton isActive={isFormValid}>신청하기</SubmitButton>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default CounselApply;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  padding-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const Highlight = styled.span`
  color: ${theme.color.main};
`;

const SectionDescription = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin: 0 0 24px 0;
`;

const CategorySection = styled.div`
  margin-top: 36px;
`;

const FormSection = styled.div`
  margin-top: 36px;
`;

const FormGroup = styled.div`
  margin-bottom: 32px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: black;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #d0d0d0;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    border-color: ${theme.color.main};
    background-color: white;
  }

  &:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.color.main};
  }
`;

const RadioLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 60px;
`;

const SubmitButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  max-width: 352px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.isActive ? theme.color.main : theme.color.gray[1]};
  color: ${(props) => (props.isActive ? "white" : theme.color.gray[2])};
  font-size: 18px;
  font-weight: 600;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};
  transition: all 0.2s ease;

  &:hover {
    opacity: ${(props) => (props.isActive ? 0.9 : 1)};
  }
`;
