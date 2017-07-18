const express = require('express');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const app = next({isDev});
const handle = app.getRequestHandler();

app.prepare()
.then(
	() => {
		const server = express();

		server.get('/', (req, res) => {
			console.log(req.query);
			let pages = '/index';
			let params = {title:'这是about'};
			app.render(req, res, pages, params);
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if(err){
				console.log(err);
				throw err;
			}else{
				console.log('express server start success at port 3000');
			}
		})
	}
)
.catch(  
	(e) => {
		console.log(e);
	}
)