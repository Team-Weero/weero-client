import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/community/WeeCommunity";
import WeeDetail from "./page/community/WeeDetail";
import WritePost from "./page/community/WritePost";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
      <Route path="wee-detail" element={<WeeDetail />} />
      <Route path="write-post" element={<WritePost />} />
    </Routes>
  );
}

export default App;
