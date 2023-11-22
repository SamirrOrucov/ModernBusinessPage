import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"

function index({ iconn, title, description }) {
  return (
    <div className="feature">
      <div className="icn"><FontAwesomeIcon icon={iconn}  /></div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default index;
