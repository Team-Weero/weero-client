import styled from "styled-components";
import { theme } from "../style/theme";

interface CategoryItemProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CategoryItem = ({
  label,
  isSelected = false,
  onClick,
}: CategoryItemProps) => {
  return (
    <ItemWrapper $isSelected={isSelected} onClick={onClick}>
      {label}
    </ItemWrapper>
  );
};

export default CategoryItem;

const ItemWrapper = styled.button<{ $isSelected: boolean }>`
  width: ${({ children }) => (children === "기타" ? "60px" : "90px")};
  height: 41px;
  border-radius: 10px;
  border: 1px solid ${theme.color.main};
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.color.main : "white"};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
