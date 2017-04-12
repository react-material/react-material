import React, { PureComponent, PropTypes } from 'react'
import { List } from 'immutable'

export default class ReactMaterialBase extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      classes: List([])
    }
  }

  componentWillMount() {
    var extraClasses = []

    if (!this.excludeBaseClass) {
      extraClasses.push(`${this.resolvedName}`)
    }

    if (this.isPrimary) {
      extraClasses.push(`${this.resolvedName}--primary`)
    }

    else if (this.isAccent) {
      extraClasses.push(`${this.resolvedName}--accent`)
    }

    if (extraClasses.length > 0) {
      this.setState({ classes: this.state.classes.concat(extraClasses) })
    }
  }

  componentDidMount () {
  }

  get excludeBaseClass() {
    return false
  }

  get resolvedName() {
    return `mdc-${this.name}`
  }

  get name () {
    return 'icon-toggle'
  }

  get classes () {
    return []
  }

  get isPrimary() {
    return this.props.primary || false
  }

  get isAccent() {
    return (this.props.accent && !this.isPrimary) || false
  }

  get hasCustomColor () {
    return this.props.color || false
  }

  get resolveStyle() {
    var custom = {}

    if (this.hasCustomColor) {
      custom.color = this.props.color
    }

    return Object.assign({}, custom, this.style)
  }

  get style () {
    return {}
  }

  get resolvedClasses() {
    return `${this.classes.join(' ')} ${this.state.classes.toJS().join(' ')}`
  }

  renderContent() {
    return (<div/>)
  }

  render() {
    return (<div className={ this.resolvedClasses } style={ this.resolveStyle }>
      { this.renderContent() }
    </div>)
  }
}
