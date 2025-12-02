import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import ChangePwd from "./ChangePwd";
import MyPage from "./Mypage";
import MyPosts from "./MyPosts";
import EditProfile from "./EditProfile";
import OwnersPage from "./OwnersPage";

function App() {
  return (
    <Routes>
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
  );
}

export default App;
