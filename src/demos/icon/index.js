import React, { PureComponent, PropTypes } from 'react'

import Icon from '../../components/icon'

export default class ReactMaterialIconDemo extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      primary: {
        showCode: false
      }
    }
  }

  render() {
    return (<div>
            <main>
              <h1> React Material Icon </h1>
              <div className='code'> { 'import { Icon } from "reactmaterial"' } </div>
              <section>

                <fieldset>
                  <legend> Default </legend>
                  <Icon/>
                  <div className='code'> { '<Icon/>' } </div>
                </fieldset>

                <fieldset>
                  <legend> Primary </legend>
                  <Icon primary={true}/>
                  <div className='code'> { '<Icon primary={true}/>' } </div>
                </fieldset>

                <fieldset>
                  <legend> Accent </legend>
                  <Icon accent={true}/>
                  <div className='code'> { '<Icon accent={true}/>' } </div>
                </fieldset>

                <fieldset>
                  <legend> Custom </legend>
                  <Icon color="#FB8C00"/>
                  <div className='code'> { '<Icon color="#FB8C00"/>' } </div>
                </fieldset>

              </section>
            </main>
    </div>)
  }
}
