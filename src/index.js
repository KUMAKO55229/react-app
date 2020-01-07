import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pagina2 from "./components/pagina2.js"
import * as serviceWorker from './serviceWorker';

import { /* BrowserRouter, */ Switch, Route, HashRouter } from "react-router-dom";//N

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path="/" /* exact={true}  */component={App} />
			<Route path="/pagina2" component={pagina2} />
			
		</Switch>
	</HashRouter>,
	document.getElementById("root")
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
