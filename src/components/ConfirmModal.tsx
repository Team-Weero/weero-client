import styled from "@emotion/styled";

type ConfirmModalProps = {
  open: boolean;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({
  open,
  message,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!open) return null;

  return (
    <>
      <DimmedOverlay onClick={onCancel} />
      <ModalWrapper role="dialog" aria-modal="true">
        <ModalText>{message}</ModalText>
        <ModalButtons>
          <CancelButton onClick={onCancel}>{cancelLabel}</CancelButton>
          <ConfirmButton onClick={onConfirm}>{confirmLabel}</ConfirmButton>
        </ModalButtons>
      </ModalWrapper>
    </>
  );
};

export default ConfirmModal;

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

const ConfirmButton = styled.button`
  width: 66px;
  height: 26px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.color.error};
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
`;
