import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import PageHeader from "./components/Header";
import CancelButton from "./components/Cancel";
import ChangeButton from "./components/Change";
import ConfirmModal from "./components/ConfirmModal";

type Props = {
  name?: string;
  nickname?: string;
  email?: string;
};

const randomNicknames = [
  "주문하신 하마",
  "외로운 스코티시폴드",
  "공부하는 너구리",
  "밤샘하는 펭귄",
];

const EditProfile = ({
  name = "김위로",
  nickname = "주문하신 하마",
  email = "",
}: Props) => {
  const navigate = useNavigate();

  const initialName = name;
  const initialNickname = nickname;
  const initialEmail = email;

  const [nameValue, setNameValue] = useState(initialName);
  const [nicknameValue, setNicknameValue] = useState(initialNickname);
  const [emailValue, setEmailValue] = useState(initialEmail);
  const [displayName, setDisplayName] = useState(initialName);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const isDirty =
    nameValue !== initialName ||
    nicknameValue !== initialNickname ||
    emailValue !== initialEmail;

  const handleRandomNickname = () => {
    const candidates = randomNicknames.filter((n) => n !== nicknameValue);
    const next =
      candidates[Math.floor(Math.random() * candidates.length)] ||
      nicknameValue;
    setNicknameValue(next);
  };

  const handleSubmit = () => {
    if (!isDirty) return;
    setDisplayName(nameValue);
    navigate("/mypage", {
      state: { toastMessage: "✅ 성공적으로 변경되었습니다!" },
    });
  };

  return (
    <>
      <PageHeader title="회원정보 수정" />

      <Wrapper>
        <NameRow>
          <UserName>{displayName}</UserName>
          <Suffix> 님</Suffix>
        </NameRow>

        <SectionTitle>회원 정보</SectionTitle>

        <FieldGroup>
          <FieldLabel>이름</FieldLabel>
          <TextInput
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          <FieldDivider />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>닉네임</FieldLabel>
          <NicknameRow>
            <NicknameText>{nicknameValue}</NicknameText>
            <RandomButton type="button" onClick={handleRandomNickname}>
              무작위 변경
            </RandomButton>
          </NicknameRow>
          <FieldDivider />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>이메일</FieldLabel>
          <TextInput
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
          <FieldDivider />
        </FieldGroup>
      </Wrapper>

      <ButtonsArea>
        <CancelButton onClick={() => setIsCancelModalOpen(true)} />
        <ChangeButton active={isDirty} onClick={handleSubmit}>
          수정
        </ChangeButton>
      </ButtonsArea>

      <ConfirmModal
        open={isCancelModalOpen}
        message="회원정보 수정을 취소하시겠습니까?"
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={() => setIsCancelModalOpen(false)}
        onConfirm={() => navigate("/mypage")}
      />
    </>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  margin: 20px 20px 0;
`;

const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 26px;
`;

const UserName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
`;

const Suffix = styled.span`
  font-size: 15px;
`;

const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px;
`;

const FieldGroup = styled.div`
  margin-bottom: 16px;
`;

const FieldLabel = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray[1]};
  margin-bottom: 12px;
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 4px 0;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[2]};
  }
`;

const FieldDivider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[3]};
  margin: 8px 0 0;
`;

const NicknameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NicknameText = styled.span`
  font-size: 15px;
`;

const RandomButton = styled.button`
  width: 71px;
  height: 26px;
  padding: 0;
  border-radius: 13px;
  border: none;
  background: ${({ theme }) => theme.color.main};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const ButtonsArea = styled.div`
  margin-top: 250px;
`;
