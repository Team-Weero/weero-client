import styled from "@emotion/styled";

const LoginButton = () => {
  return (
    <>
      <Login>로그인</Login>
    </>
  );
};

const Login = styled.button`
  width: 346px;
  height: 48px;
  padding: 0px 12px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.color.gray[1]};
  border: none;
  margin: 267px 0px 16px 28px;
`;

export default LoginButton;
