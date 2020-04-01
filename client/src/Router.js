import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './client/Index';
import Login from './client/Login';
import UserRegister from './client/UserRegister';
import EmployeeRegister from './client/EmployeeRegister';
import Dashboard from './delta/Dashboard';
import EmployeeAcceptance from './delta/EmployeeAcceptance';
//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/' component={Index} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={UserRegister} />
				<Route exact path='/register-employee' component={EmployeeRegister} />

				<Route exact path='/employee-acceptance' component={EmployeeAcceptance} />
			</Switch>
		</Router>
	);
}

export default App;
