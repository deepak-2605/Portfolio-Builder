import React from "react";

const FormGroup = ({
  Id,
  Label,
  Type,
  onChange,
  Value,
  defaultValue,
  Checked,
  defaultChecked,
  Placeholder,
  readOnly,
  Desc
}) => {
  return (
    <div className="form-group my-3">
      <label htmlFor={Id} className="text-xl block">{Label}</label>
      <input
        type={Type}
        className="form-control block w-96"
        id={Id}
        name={Id}
        onChange={onChange}
        value={Value}
        placeholder={Placeholder}
        defaultValue={defaultValue}
        checked={Checked}
        defaultChecked={defaultChecked}
        aria-describedby={Id + "Help"}
        readOnly={readOnly}
      />
      {Desc && (
        <small id={`${Id}-help`} className="text-gray-500">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;