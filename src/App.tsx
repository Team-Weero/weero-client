import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/community/WeeCommunity";
import WeeDetail from "./page/community/WeeDetail";
import WritePost from "./page/community/WritePost";
import ScrollToTop from "./components/ScrollToTop";
import Community from "./page/community/Community";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="wee-community" element={<WeeCommunity />} />
        <Route path="wee-detail" element={<WeeDetail />} />
        <Route path="write-post" element={<WritePost />} />
        <Route path="community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
