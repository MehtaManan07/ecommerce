import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/DirectorySelector";

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherProps}) => (
        <MenuItem
          key={id}
          {...otherProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
