import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import MonumentsHomePage from "../monument/pages/MonumentsHomePage/MonumentsHomePage";
import MonumentFormPage from "../monument/pages/MonumentFormPage/MonumentFormPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<MonumentsHomePage />} />
        <Route path="/add-monument" element={<MonumentFormPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
