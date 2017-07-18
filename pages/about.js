import React from 'react';
import { render } from 'react-dom';

class About extends React.Component{
	static getInitialProps(req) { 
		return {
			msg:req.query.title
		}
	}
    render(){
        return (
        	<div>
            	<div>{this.props.msg}</div>
        	</div>
        )
    }
}

export default About;