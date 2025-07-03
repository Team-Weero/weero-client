import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./page/WeeCommunity";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
      <Route path="homePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
