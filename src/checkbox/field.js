import React from 'react'
import classnames from 'classnames'

// import '@material/form-field/dist/mdc.form-field.css';

export default function FormField({alignEnd, children}) {
  return (
    <div className={classnames('mdc-form-field', {'mdc-form-field--align-end': alignEnd})}>
      {children}
    </div>
  );
}
