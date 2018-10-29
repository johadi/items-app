import React from "react";

const Checkbox = ({ name, checked = false, onChange }) => (
  <input
    type="checkbox"
    id={name}
    className="regular-checkbox big-checkbox"
    name={name}
    checked={checked}
    onChange={onChange}
  />
);

export default Checkbox;
