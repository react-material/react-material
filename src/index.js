import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CheckboxDemo from './demos/checkbox'

const ReactMaterialDemos = () => (
  <Router>
    <div>
      <h1> React Material Demos </h1>
        <ul>
          <li><Link to="/checkbox">Checkbox</Link></li>
        </ul>
        <hr/>

        <Route exact path="/checkbox" component={CheckboxDemo}/>
    </div>
  </Router>
)


ReactDOM.render(<ReactMaterialDemos />, document.getElementById('root'));
