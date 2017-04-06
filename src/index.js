import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '@material/form-field/dist/mdc.form-field.css'
import '@material/checkbox/dist/mdc.checkbox.css'
import '@material/drawer/dist/mdc.drawer.css'

import CheckboxDemo from './demos/checkbox'
import DrawerDemo from './demos/drawer'

const ReactMaterialDemos = () => (
  <Router>
    <div>
      <h1> React Material Demos </h1>
        <ul>
          <li><Link to="/checkbox">Checkbox</Link></li>
          <li><Link to="/drawer">Drawer</Link></li>
        </ul>
        <hr/>

          <Route exact path="/checkbox" component={CheckboxDemo}/>
          <Route exact path="/drawer" component={DrawerDemo}/>
    </div>
  </Router>
)


ReactDOM.render(<ReactMaterialDemos />, document.getElementById('root'))
