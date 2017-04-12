import React, { PureComponent, PropTypes } from 'react'

export default class ReactMaterialToolbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div>
      <header className="mdc-toolbar mdc-toolbar--fixed">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <a className="material-icons">menu</a>
            <span className="mdc-toolbar__title"> Toolbar </span>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
            <a className="material-icons">favorite</a>
          </section>
        </div>
      </header>
      <main>
        <div className="mdc-toolbar-fixed-adjust"/>
      </main>
    </div>)
  }
}
