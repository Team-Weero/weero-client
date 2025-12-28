import styled from "@emotion/styled";

type Props = {
  onClick?: () => void;
};

const CancelButton = ({ onClick }: Props) => {
  return <Cancel onClick={onClick}>취소</Cancel>;
};

const Cancel = styled.button`
  width: 172px;
  height: 40px;
  padding: 0px 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 0px 0px 16px 20px;
  color: ${({ theme }) => theme.color.gray[1]};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  cursor: pointer;
`;

export default CancelButton;
