import React, { PureComponent, PropTypes } from 'react'

export default class ReactMaterialButton extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderDefault() {
    return (<button className="mdc-button">
      Default
    </button>)
  }

  renderRaised() {
    return (<button className="mdc-button mdc-button--raised">
      Raised
    </button>)
  }

  render() {
    return (<div>
      { this.renderDefault() }
    </div>)
  }
}
