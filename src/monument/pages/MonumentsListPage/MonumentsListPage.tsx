import MonumentClient from "../../client/MonumentClient";
import MonumentCardsList from "../../components/MonumentCardsList/MonumentCardsList";
import { useEffect, useState } from "react";
import { Monument } from "../../types";

const MonumentsListPage: React.FC = () => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  useEffect(() => {
    const monumentClient = new MonumentClient();
    monumentClient.getAllMonuments().then((monuments) => {
      setMonuments(monuments);
    });
  }, []);

  return (
    <>
      <h2 className="page-title">Home</h2>
      <MonumentCardsList monuments={monuments} />
    </>
  );
};

export default MonumentsListPage;
