import React from "react";

const Button = props => {
  const { onSubmit } = props;
  return <button className="btn btn-dark">Get Weather</button>;
};

export default Button;
