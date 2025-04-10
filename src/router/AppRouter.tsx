import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import MonumentsListPage from "../monument/pages/MonumentsListPage/MonumentsListPage";
import MonumentFormPage from "../monument/pages/MonumentFormPage/MonumentFormPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<MonumentsListPage />} />
        <Route path="/add-monument" element={<MonumentFormPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
