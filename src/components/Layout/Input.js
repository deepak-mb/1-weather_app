import React from "react";

const Input = props => {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="my-2"
    />
  );
};

export default Input;
