import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './components/main.css'

import Icon from './demos/icon'

const ReactMaterialDemos = () => (
  <Router>
    <div style={ styles.container }>
      <Route exact path="/" component={Home}/>
      <Route path="/web/icon" component={Icon}/>
      <Route path="/web" component={Components}/>

    </div>
  </Router>
)

const Home = () => (
  <div style={ styles.home }>
    <h1 style={ styles.header }> React Material </h1>
    <p style={ styles.logo }> <img src="/logo.png" style={{width: 120}}/> </p>
    <Link style={ styles.link } to="/web"> Web Components </Link>

    <div className="badges">
      <a href="https://github.com/react-material/react-material"> <img src="https://img.shields.io/badge/react--material-web-blue.svg"/> </a>
      <a href="https://www.npmjs.com/package/reactmaterial"> <img src="https://img.shields.io/npm/v/reactmaterial.svg"/> </a>
      <a href="https://travis-ci.org/react-material/react-material"> <img src="https://travis-ci.org/react-material/react-material.svg?branch=master"/> </a>
      <a href="https://codeclimate.com/github/react-material/react-material"> <img src="https://codeclimate.com/github/react-material/react-material/badges/gpa.svg"/> </a>
      <a href="https://codeclimate.com/github/react-material/react-material"> <img src="https://codeclimate.com/github/react-material/react-material/badges/coverage.svg"/> </a>
    </div>

  </div>
)

const Components = ({ match }) => (
  <div style={ styles.components }>
    <p style={ styles.logo }> <img src="/logo.png" style={{width: 120}}/></p>
    <h2 style={ styles.header }> React Material Web Components </h2>

    <ul style={styles.list}>
      <li style={styles.listItem}><Link style={ styles.component } to={`${match.url}/icon`}> Icon </Link></li>
    </ul>

    <Link style={ styles.link } to="/"> Back </Link>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  home: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF"
  },
  components: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF"
  },
  logo: {
    paddingTop: 10,
    paddingBottom: 20
  },
  header: {
    fontFamily: 'Roboto',
    color: "#424242"
  },
  list: {
    listStyle: 'none',
    listStylePosition: 'inside',
    textAlign: 'center',
    marginBottom: 50
  },
  listItem: {
    padding: 15,
    border: '#757575 1px solid',
    marginRight: 40,
    marginBottom: 10,
  },
  component: {
    color: "#757575",
    fontFamily: 'Roboto',
    textDecoration: 'none'
  },
  link: {
    backgroundColor: "#757575",
    border: '#3E2723 1px solid',
    padding: 10,
    color: "#FAFAFA",
    fontFamily: 'Roboto',
    textDecoration: 'none'
  }
}

ReactDOM.render(<ReactMaterialDemos />, document.getElementById('root'))
