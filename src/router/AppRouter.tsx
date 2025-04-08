import { Route, Routes } from "react-router";
import App from "../components/App/App";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<App />} />
      </Routes>
    </>
  );
};

export default AppRouter;
