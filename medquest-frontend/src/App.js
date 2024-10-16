import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AppointmentForm from './components/AppointmentForm';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/book-appointment" component={AppointmentForm} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
