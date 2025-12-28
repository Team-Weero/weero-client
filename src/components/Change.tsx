import styled from "@emotion/styled";

type ChangeButtonProps = {
  active: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ChangeButton = ({ active, onClick, children }: ChangeButtonProps) => {
  return (
    <Change disabled={!active} $active={active} onClick={onClick}>
      {children ?? "변경"}
    </Change>
  );
};

export default ChangeButton;

const Change = styled.button<{ $active: boolean }>`
  width: 172px;
  height: 40px;
  padding: 0px 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 0px 0px 16px 18px;
  border: none;

  cursor: ${({ $active }) => ($active ? "pointer" : "default")};

  color: ${({ theme, $active }) => ($active ? "white" : theme.color.gray[1])};
  background-color: ${({ theme, $active }) => ($active ? theme.color.main : theme.color.gray[4])};

  &:disabled {
    opacity: 0.6;
  }
`;
