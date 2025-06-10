import { Route, Routes } from "react-router-dom";
import "./index.css";
import WeeCommunity from "./pages/WeeCommunity";

function App() {
  return (
    <Routes>
      <Route path="wee-community" element={<WeeCommunity />} />
    </Routes>
  );
}

export default App;
