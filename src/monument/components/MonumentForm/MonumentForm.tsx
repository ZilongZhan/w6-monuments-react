import { useState } from "react";
import { MonumentData } from "../../types";
import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  const initialMonumentData: MonumentData = {
    name: "",
    description: "",
    imageUrl: "",
    city: "",
    country: "",
  };

  const [monument, setMonument] = useState<MonumentData>(initialMonumentData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const monumentData = {
      ...monument,
      [event.target.id]: event.target.value,
    };

    setMonument(monumentData);
  };

  const isValidData =
    monument.name !== "" &&
    monument.description !== "" &&
    monument.city !== "" &&
    monument.imageUrl !== "" &&
    monument.country !== "";

  return (
    <form
      className="monument-form"
      aria-label="Add monument form"
      onSubmit={handleSubmit}
    >
      <h3 className="monument-form__title">New monument</h3>
      <fieldset className="monument-form__fieldset">
        <div className="form-group">
          <label className="monument-form__label" htmlFor="name">
            Name:
          </label>
          <input
            className="monument-form__input"
            id="name"
            type="string"
            required
            value={monument.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label className="monument-form__label" htmlFor="city">
            City:
          </label>
          <input
            className="monument-form__input"
            id="city"
            type="string"
            required
            value={monument.city}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label className="monument-form__label" htmlFor="country">
            Country:
          </label>
          <input
            className="monument-form__input"
            id="country"
            type="string"
            required
            value={monument.country}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label className="monument-form__label" htmlFor="imageUrl">
            Link to image:
          </label>
          <input
            className="monument-form__input"
            id="imageUrl"
            type="url"
            required
            value={monument.imageUrl}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label className="monument-form__label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="monument-form__input"
            id="description"
            rows={5}
            required
            value={monument.description}
            onChange={handleOnChange}
          />
        </div>
        <button className="button" disabled={isValidData}>
          Create monument
        </button>
      </fieldset>
    </form>
  );
};

export default MonumentForm;
