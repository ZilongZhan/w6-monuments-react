import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <form className="monument-form" aria-label="Add monument form">
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
          />
        </div>
        <div className="form-group">
          <label className="monument-form__label" htmlFor="image-url">
            Link to image:
          </label>
          <input
            className="monument-form__input"
            id="image-url"
            type="url"
            required
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
          ></textarea>
        </div>
        <button className="button">Create monument</button>
      </fieldset>
    </form>
  );
};

export default MonumentForm;
