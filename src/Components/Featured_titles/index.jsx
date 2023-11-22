import React from "react";
import Feature from "../Featured_title/index";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons/faFolderClosed";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons/faToggleOn";
import "./style.scss"

function index() {
  return (
    <div className="feature_container">
      <Feature
        title="Featured title"
        iconn={faFolderClosed}
        description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
      />
      <Feature
        title="Featured title"
        iconn={faHouse}
        description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
      />
      <Feature
        title="Featured title"
        iconn={faHouse}
        description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
      />
      <Feature
        title="Featured title"
        iconn={faToggleOn}
        description="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
      />
    </div>
  );
}

export default index;
