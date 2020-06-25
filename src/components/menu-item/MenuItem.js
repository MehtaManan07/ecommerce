import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, size, imageUrl, history, match, linkUrl }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> SHOP NOW </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
