import React from "react";

const Button = props => {
  const { field } = props;
  return <button className="btn btn-dark btn-block mx-2" style={{maxWidth: "150px"}}>{field}</button>;
};

export default Button;
