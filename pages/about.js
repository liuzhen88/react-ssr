import React from 'react';
import { render } from 'react-dom';

class About extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			msg:req ? 'server':'client'
		}
	}
    render(){
        return (
            <div>about page</div>
        )
    }
}

export default About;