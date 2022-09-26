import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const BackButton = () => {
  const history = useHistory();
  const handleClick = () => history.goBack();
  return (
    <div className="fixed-top">
      <h3 onClick={handleClick}>
        <i className="bi bi-arrow-left px-4 back-button" />
      </h3>
    </div>
  );
};

export default BackButton;
