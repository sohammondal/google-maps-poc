export const InlineTextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-3 row">
      <label className="col-2 form-label fs-5 fw-bold pr-0">{label}</label>
      <div className="col-10">
        <input
          className="form-control"
          type="text"
          placeholder={placeholder}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const InlineCheckbox = ({ data, value, title, onChange }) => (
  <div className="mb-3">
    <label className="col-2 form-label me-2 fs-5 fw-bold">{title}</label>
    {data.map((d) => (
      <div key={d.value} className="form-check form-check-inline">
        <input
          name={`${title}-check-input`}
          className="form-check-input"
          type="radio"
          value={d.value}
          onChange={(e) => onChange(e.target.value)}
          required
          checked={value === d.value}
        />
        <label className="form-check-label">{d.text}</label>
      </div>
    ))}
  </div>
);

export const withInlineCheckbox = (props) => () => (
  <InlineCheckbox {...props} />
);

export const withInlineTextInput = (props) => <InlineTextInput {...props} />;
