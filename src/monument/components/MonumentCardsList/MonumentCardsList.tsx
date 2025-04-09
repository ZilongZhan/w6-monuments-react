import { Monument } from "../../types";
import MonumentCard from "../MonumentCard/MonumentCard";

import "./MonumentCardsList.css";

interface MonumentCardsListProps {
  monuments: Monument[];
}

const MonumentCardsList: React.FC<MonumentCardsListProps> = ({ monuments }) => {
  return (
    <ul className="monuments">
      {monuments.map((monument) => (
        <li key={monument.id}>
          <MonumentCard monument={monument} />
        </li>
      ))}
    </ul>
  );
};

export default MonumentCardsList;
