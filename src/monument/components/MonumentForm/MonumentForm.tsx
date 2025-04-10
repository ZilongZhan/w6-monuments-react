import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <form className="monument-form">
      <div className="form-group">
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
      </div>
      <div className="form-group">
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
      </div>
      <div className="form-group">
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
      </div>
      <div className="form-group">
        <div className="form-group">
          <label className="monument-form__label" htmlFor="image-url">
            Link to image:
          </label>
          <input
            className="monument-form__input"
            id="image-url"
            type="string"
            required
          />
        </div>
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
    </form>
  );
};

export default MonumentForm;
