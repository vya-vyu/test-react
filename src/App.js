import "./App.css";

import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import TweetsPage from "./pages/TweetsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
