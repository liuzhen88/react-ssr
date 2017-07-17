import React from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-unfetch';

class About extends React.Component{
	static getInitialProps() {	 
		return {
			msg:'这是SPA单页面about路由'
		}
	}
    render(){
        return (
        	<div>
            	<div>about page from {this.props.msg}</div>
        	</div>
        )
    }
}

export default About;