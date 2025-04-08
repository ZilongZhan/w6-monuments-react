import { Route, Routes } from "react-router";
import App from "../components/App/App";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/home" />
      </Route>
    </Routes>
  );
};

export default AppRouter;
