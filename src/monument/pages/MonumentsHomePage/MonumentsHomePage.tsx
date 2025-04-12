import { useEffect } from "react";
import MonumentCardsList from "../../components/MonumentCardsList/MonumentCardsList";
import useMonuments from "../../hooks/useMonuments";

const MonumentsHomePage: React.FC = () => {
  const { monuments, loadMonuments } = useMonuments();

  useEffect(() => {
    loadMonuments();
  }, [loadMonuments]);

  return (
    <>
      <h2 className="page-title">Home</h2>
      <MonumentCardsList monuments={monuments} />
    </>
  );
};

export default MonumentsHomePage;
