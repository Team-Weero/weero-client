import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/wee-community/WeeCommunity";
import WeeDetail from "./page/wee-community/WeeDetail";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
      <Route path="wee-detail" element={<WeeDetail />} />
    </Routes>
  );
}

export default App;
