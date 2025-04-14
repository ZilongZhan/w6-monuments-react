import useMonuments from "../../hooks/useMonuments";
import { Monument } from "../../types";
import Button from "../shared/Button/Button";

import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { id, name, description, imageUrl, imageAlt, city, country },
}) => {
  const { removeMonument } = useMonuments();

  const handleOnDelete = (): void => {
    removeMonument(id);
  };

  return (
    <article className="monument">
      <h3 className="monument__name">{name}</h3>
      <img
        className="monument__image"
        src={imageUrl}
        alt={imageAlt}
        width="300"
        height="200"
      />
      <p className="monument__description">{description}</p>
      <span className="monument__location">{`${city}, ${country}`}</span>
      <Button action={handleOnDelete} modifier="delete">
        ✖
      </Button>
    </article>
  );
};

export default MonumentCard;
