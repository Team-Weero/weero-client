import styled from "@emotion/styled";

const ChangeButton = () => {
  return (
    <>
      <Change>수정</Change>
    </>
  );
};

const Change = styled.button`
  width: 172px;
  height: 40px;
  padding: 0px 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 351px 0px 16px 18px;
  color: white;
  background-color: ${({ theme }) => theme.color.main};
  border: none;
`;

export default ChangeButton;
