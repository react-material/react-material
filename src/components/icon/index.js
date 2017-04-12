import React from 'react'
import ReactMaterialBase from '../base'

export default class ReactMaterialIcon extends ReactMaterialBase {

  get name () {
    return 'icon-toggle'
  }

  get excludeBaseClass() {
    return true
  }

  get classes () {
    return ['material-icons']
  }

  get style() {
    return {}
  }

  renderContent() {
    return this.props.type || 'favorite'
  }

}
