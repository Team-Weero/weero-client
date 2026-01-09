import styled from "@emotion/styled";
import RecentWorryItem from "./RecentWorryItem";

const dummyWorries = [
  "프젝을 제 시간에 못 끝낸 친구.. 내가 예민한걸까?..",
  "대마고에서 연애 잘 하는 방법 있나요",
  "용감한 내 가방 no keyring no hand mirror oh my god",
];

const RecentWorryList = () => {
  return (
    <ListWrapper>
      {dummyWorries.map((worry, idx) => (
        <RecentWorryItem key={idx} text={worry} />
      ))}
    </ListWrapper>
  );
};

export default RecentWorryList;

const ListWrapper = styled.div`
  width: 100%;
  /* padding: 5px 10px; */
`;
