import React from "react";

const Input = props => {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <div className="input-group my-3">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control d-block inputField roboto-300"
      />
    </div>
  );
};

export default Input;
