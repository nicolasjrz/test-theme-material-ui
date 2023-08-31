import { Route, Routes } from "react-router-dom";
import { ContactPage, HomePage, NewsPage, TeamPage } from "../pages";

export const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
