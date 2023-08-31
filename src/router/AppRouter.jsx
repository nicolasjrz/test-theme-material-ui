import { Route, Routes } from "react-router-dom";
import { PagesRoute } from "./PagesRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<PagesRoute />} />
    </Routes>
  );
};
