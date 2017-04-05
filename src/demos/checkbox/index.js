import React, { PureComponent, PropTypes } from 'react'

import Checkbox from '../../checkbox'
import CheckboxLabel from '../../checkbox/label'
import FormField from '../../checkbox/field'

export default class Demo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      disabled: false,
      indeterminate: false,
      changeEventCount: 0
    }
  }

  render() {
    const {checked, disabled, indeterminate, status, changeEventCount} = this.state;
    return (
      <main>
        <h1> Checkbox Demo</h1>
        <FormField>
          <Checkbox id="my-checkbox"
                    labelId="my-checkbox-label"
                    disabled={disabled}
                    indeterminate={indeterminate}
                    onChange={({target}) => this.setState({
                      changeEventCount: changeEventCount + 1,
                      checked: target.checked,
                      indeterminate: false
                    })}/>
          <CheckboxLabel id="my-checkbox-label" for="my-checkbox">
            The checkbox is currently {this.status()}
          </CheckboxLabel>
        </FormField>
        <div style={{paddingTop: '12px'}}>
          <button onClick={() => this.setState({indeterminate: true})}>Make Indeterminate</button>
          <button onClick={() => this.setState({disabled: !disabled})}>Toggle Disabled</button>
        </div>
        <p>{changeEventCount} change events so far</p>
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
