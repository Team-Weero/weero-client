import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/community/WeeCommunity";
import WeeDetail from "./page/community/WeeDetail";
import WritePost from "./page/community/WritePost";
import ScrollToTop from "./components/ScrollToTop";
import Community from "./page/community/Community";
import AlarmPage from "./page/alarm/AlarmPage";
import HomePage from "./page/HomePage";
import ChatPage from "./page/ChatPage";
import ChatHome from "./page/ChatHome";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/wee-community" element={<WeeCommunity />} />
        <Route path="/wee-detail" element={<WeeDetail />} />
        <Route path="/write-post" element={<WritePost />} />
        <Route path="/community" element={<Community />} />
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="chat-home" element={<ChatHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
