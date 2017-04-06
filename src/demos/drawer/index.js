import React, { PureComponent, PropTypes } from 'react'

import Drawer from '../../components/drawer'

export default class Demo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <main className="demo-main mdc-toolbar-fixed-adjust">
        <h1> Drawer Demo</h1>
          <h1 className="mdc-typography--display1">Temporary Drawer</h1>
          <p className="mdc-typography--body1">Click the menu icon above to open.</p>
      </main>
    );
  }

  status() {
    if (this.state.indeterminate) {
      return 'indeterminate';
    }
    return this.state.checked ? 'checked' : 'unchecked';
  }
}
