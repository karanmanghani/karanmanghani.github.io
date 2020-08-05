import React from 'react';
import 'semantic-ui-css/semantic.min.css'

export default class Banner extends React.Component {

    render () {
    	return(
	        <div className="banner-parent">
	            <div className="banner-image">
	                <img className="ui medium circular image" alt="main-img" src={require('../images/sample.jpg')}/>
	            </div>
				<div className="banner-text">
					<div className="banner-title">
						<h1>Karan Manghani</h1>
					</div>
					<div className="banner-subtitle">
						<h3>Full Stack Developer</h3>
					</div>
					<div className="banner-icons">
						<a href="https://www.linkedin.com/in/karan-manghani/">
							<img className="ui mini image" alt="linkedin-logo" src={require('../images/linkedin-icon.png')} />
						</a>
						<a href="https://github.com/karanmanghani">
							<img className="ui mini image" alt="github-logo" src={require('../images/github-logo.svg')} />	
						</a>
						<a href="mailto:karanmanghani@ufl.edu">
							<img className="ui mini image" alt="mail-logo" src={require('../images/outlook.png')} />
						</a>	
					</div>
					<div className="banner-resume-button">
						<button className="ui inverted large button">Résumé</button>
					</div>
				</div>
				<div className="banner-intern-experience">
					<a href="https://www.amazon.com/">
						<div class="intern-box" href="https://www.amazon.com/">
							<div className="intern-logo">
								<img className="ui tiny image" alt="converge-logo" src={require('../images/amazon-logo.png')} />
							</div>	
							<div class="intern-header">
								<h3>Software Development Engineer Intern at Amazon</h3>
							</div>
						</div>
					</a>
					<a href="https://www.cpconverge.com/login.html">
						<div className="intern-box">
							<div className="intern-logo">
								<img className="ui tiny image" alt="converge-logo" src={require('../images/converge.png')} />
							</div>	
							<div class="intern-header">
								<h3>Software Developer Intern at CPConverge</h3>
							</div>
						</div>
					</a>
				</div>
	        </div>
        ) 
    }
}