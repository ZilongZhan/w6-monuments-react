import "./MonumentForm.css";
import useMonuentForm from "../../hooks/useMonumentForm";

const MonumentForm: React.FC = () => {
  const {
    monumentData: { city, country, description, imageUrl, name },
    handleOnChange,
    handleSubmit,
    isValidData,
  } = useMonuentForm();

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
            value={name}
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
            value={city}
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
            value={country}
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
            value={imageUrl}
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
            value={description}
            onChange={handleOnChange}
          />
        </div>
        <button className="button" disabled={!isValidData}>
          Create monument
        </button>
      </fieldset>
    </form>
  );
};

export default MonumentForm;
