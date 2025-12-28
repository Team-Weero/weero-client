import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/community/WeeCommunity";
import WeeDetail from "./page/community/WeeDetail";
import WritePost from "./page/community/WritePost";
import ScrollToTop from "./components/ScrollToTop";
import Community from "./page/community/Community";
import AlarmPage from "./page/alarm/AlarmPage";
import Login from "./Login";
import Signup from "./Signup";
import ChangePwd from "./ChangePwd";
import MyPage from "./Mypage";
import MyPosts from "./MyPosts";
import EditProfile from "./EditProfile";
import OwnersPage from "./OwnersPage";
import HomePage from "./page/HomePage";
import CounselApply from "./page/CounselApply";
import ChatHome from "./page/ChatHome";
import ChatPage from "./page/ChatPage";

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
        <Route path="counsel-apply" element={<CounselApply />} />
        <Route path="chat-home" element={<ChatHome />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change" element={<ChangePwd />} />
        <Route path="/mypage" element={<MyPage userName="김위로" userEmail="wee@dsm.hs.kr" />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route
          path="/owner"
          element={<OwnersPage userName="김위로" userEmail="wee@dsm.hs.kr" isPeerCounselor={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
