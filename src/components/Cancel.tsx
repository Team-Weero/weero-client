import styled from "@emotion/styled";

const CancelButton = () => {
  return (
    <>
      <Cancel>취소</Cancel>
    </>
  );
};

const Cancel = styled.button`
  width: 172px;
  height: 40px;
  padding: 0px 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 267px 0px 16px 20px;
  color: ${({ theme }) => theme.color.gray[1]};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
`;

export default CancelButton;
