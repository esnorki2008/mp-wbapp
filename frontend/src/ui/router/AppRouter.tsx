import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
