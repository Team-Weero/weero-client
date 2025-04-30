import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;