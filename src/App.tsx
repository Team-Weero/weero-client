import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/community/WeeCommunity";
import WeeDetail from "./page/community/WeeDetail";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
      <Route path="wee-detail" element={<WeeDetail />} />
    </Routes>
  );
}

export default App;
