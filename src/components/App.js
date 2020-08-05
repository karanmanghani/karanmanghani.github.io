import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom'
import Banner from './Banner'
import Projects from './Projects';
import Internships from './Internships';
import ExtraCurricular from './ExtraCurricular'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Home'
        }
    }

    render () {
        console.log(this.state.active);
    	return(
            <BrowserRouter>
                <div className="karan-website-main">
                  <div className="navbar-parent">
                      <div className="ui secondary pointing menu">
                          <p className={`item ${this.state.active==='Home'?'active' : ''}`} >
                            <Link to='/' onClick={()=>{this.setState({active: 'Home'})}}>Home</Link>
                          </p>
                          <p className={`item ${this.state.active==='Internships'?'active' : ''}`} >
                            <Link to='/internships' onClick={()=>{this.setState({active: 'Internships'})}}>Internships</Link>
                          </p>
                          <p className={`item ${this.state.active==='Projects'?'active' : ''}`}>
                            <Link to='/projects' onClick={()=>{this.setState({active: 'Projects'})}}>Projects</Link>
                          </p>
                          <p className={`item ${this.state.active==='ExtraCurricular'?'active' : ''}`}>
                              <Link to='/extracurricular' onClick={()=>{this.setState({active: 'ExtraCurricular'})}}>ExtraCurricular</Link>
                          </p>
                          <div className="right menu">
                              <a className="ui item" href="https://www.linkedin.com/in/karan-manghani/" >
                                  LinkedIn
                              </a>
                              <a className="ui item" href="https://github.com/karanmanghani">
                                  Github
                              </a>
                          </div>                  
                      </div>
                  </div>
                  <Route exact path='/' component={Banner} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/internships' component={Internships} />
                  <Route path='/extracurricular' component={ExtraCurricular} />
                </div>
            </BrowserRouter>
        ) 
    }
}