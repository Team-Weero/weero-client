import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./pages/WeeCommunity";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
      <Route path="homePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
