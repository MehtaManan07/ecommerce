import React, { useState } from "react";
import { sections } from "../../shared/DirectoryData";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const [items, setItems] = useState(sections);
  return (
    <div className="directory-menu">
      {items.map(({id, ...otherProps}) => (
        <MenuItem
          key={id}
          {...otherProps}
        />
      ))}
    </div>
  );
};

export default Directory;
