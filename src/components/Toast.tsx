import styled from "@emotion/styled";

type ToastProps = {
  message: string;
};

const Toast = ({ message }: ToastProps) => {
  return <ToastBox>{message}</ToastBox>;
};

export default Toast;

const ToastBox = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  padding: 8px 16px;
  border-radius: 20px;

  background: white;
  color: black;
  font-size: 13px;
  font-weight: 500;

  z-index: 200;
  animation: fadeInOut 2.2s forwards;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -10px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -10px);
    }
  }
`;
