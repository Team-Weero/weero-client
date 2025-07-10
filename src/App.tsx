import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import ChangePwd from "./ChangePwd";
import MyPage from "./MyPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/change" element={<ChangePwd />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
