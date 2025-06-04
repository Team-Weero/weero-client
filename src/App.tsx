import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/homePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
