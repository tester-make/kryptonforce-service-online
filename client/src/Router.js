import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './client/Index';
import Login from './client/Login';
import UserRegister from './client/UserRegister';
import EmployeeRegister from './client/EmployeeRegister';
import Dashboard from './delta/Dashboard';
// ────────────────────────────────────────────────────────────────────────────────
import EmployeeAcceptance from './delta/EmployeeAcceptance';
import UserIssues from './delta/UserIssues';
import EmployeeTask from './delta/EmployeeTask';
import Sparepart from './delta/Sparepart';
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

				<Route exact path='/sparepart' component={Sparepart} />
				<Route exact path='/employee-acceptance' component={EmployeeAcceptance} />
				<Route exact path='/user-issues' component={UserIssues} />
				<Route exact path='/employee-task' component={EmployeeTask} />
			</Switch>
		</Router>
	);
}

export default App;
