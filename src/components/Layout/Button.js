import React from "react";

const Button = props => {
  const { field } = props;
  return <button className="btn btn-dark mx-2">{field}</button>;
};

export default Button;
