import styled from "styled-components";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  selected: string | null;
  onSelect: (category: string) => void;
}

const categories = [
  "학업/공부",
  "친구 관계",
  "가족 관계",
  "진로 방향",
  "우울/불안",
  "자해/자살",
  "기타",
];

const CategoryList = ({ selected, onSelect }: CategoryListProps) => {
  return (
    <ListWrapper>
      {categories.map((category) => (
        <CategoryItem
          key={category}
          label={category}
          isSelected={selected === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </ListWrapper>
  );
};

export default CategoryList;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 36px;
  row-gap: 20px;
  max-width: 320px;
`;
