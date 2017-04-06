import React from 'react';

export default function CheckboxLabel(props) {
  const {id, children} = props;
  const controlId = props['for'];
  return (
    <label className="mdc-checkbox-label" id={id} htmlFor={controlId}>{children}</label>
  );
}
