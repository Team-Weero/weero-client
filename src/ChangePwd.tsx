import { useState } from "react";
import styled from "@emotion/styled";
import CancelButton from "./components/Cancel";
import ChangeButton from "./components/Change";
import PasswordInput from "./components/Password";
import { useNavigate } from "react-router-dom";
import PageHeader from "./components/Header";
import ConfirmModal from "./components/ConfirmModal";

const ChangePwd = () => {
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const isAllFilled = currentPwd.trim().length > 0 && newPwd.trim().length > 0 && confirmPwd.trim().length > 0;

  const handleChangePwd = () => {
    if (!isAllFilled) return;
    if (newPwd !== confirmPwd) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    navigate("/mypage", { state: { toastMessage: "✅ 성공적으로 변경되었습니다!" } });
  };

  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="비밀번호 변경" />

      <Pwd>
        <PasswordInput label="기존 비밀번호" value={currentPwd} onChange={setCurrentPwd} />
        <PasswordInput label="새로운 비밀번호" value={newPwd} onChange={setNewPwd} />
        <PasswordInput label="새로운 비밀번호 확인" value={confirmPwd} onChange={setConfirmPwd} />
      </Pwd>

      <ButtonsArea>
        <CancelButton onClick={() => setIsCancelModalOpen(true)} />
        <ChangeButton active={isAllFilled} onClick={handleChangePwd} />
      </ButtonsArea>

      <ConfirmModal
        open={isCancelModalOpen}
        message="비밀번호 변경을 취소하시겠습니까?"
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={() => setIsCancelModalOpen(false)}
        onConfirm={() => navigate("/mypage")}
      />
    </>
  );
};

export default ChangePwd;

const Pwd = styled.div`
  margin: 40px 0px;
`;

const ButtonsArea = styled.div`
  margin-top: 300px;
`;
