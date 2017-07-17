import React from 'react';
import { render } from 'react-dom';
import Link from 'next/link';

class Index extends React.Component{
	static async getInitialProps({req, res}) {
		const response = await fetch('http://120.25.152.42:4000/getTravel');
		const data = await response.json();
		return {
			msg: req ? '这是服务器端渲染的，可以看看没有ajax请求':'这是客户端渲染的',
			data:data
		}
	}
    render(){
        return (
            <div>
                <div>hello world next.js</div>
                <Link href='/about'>
                	<a>to about</a>
                </Link>
                <div>========================================</div>
                <div>about page from {this.props.msg}{this.props.code}</div>
                <div>========================================</div>
                {
        			this.props.data.TrafficStations.map(function(item){
        				return <div key={item.Id}>{item.Name}</div>
        			})
        		}
            </div>
        )
    }
}

export default Index;