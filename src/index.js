import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Dashboard from './components/dashboard/Dashboard';
import Reports from './components/reports/Reports';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App} path="/">
	      <IndexRoute component={Dashboard} />
	      <Route path="/" component={Dashboard}/>
	      <Route path="/reports" component={Reports}/>
	    </Route>
	</Router>,
  document.getElementById('root')
);
