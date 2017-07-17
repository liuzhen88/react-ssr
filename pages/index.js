import React from 'react';
import { render } from 'react-dom';
import Link from 'next/link';

class Index extends React.Component{
    render(){
        return (
            <div>
                <span>hello world next.js</span>
                <Link href='/about'>
                	<a>to about</a>
                </Link>
            </div>
        )
    }
}

export default Index;