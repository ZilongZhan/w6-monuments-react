import { Monument } from "../../types";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { name, description, imageUrl, imageAlt, city, country },
}) => {
  return (
    <article className="monument">
      <h2 className="monument__name">{name}</h2>
      <img
        className="monument__image"
        src={imageUrl}
        alt={imageAlt}
        width="220"
        height="147"
      />
      <p className="monument__description">{description}</p>
      <span className="monument__location">{`${city}, ${country}`}</span>
    </article>
  );
};

export default MonumentCard;
