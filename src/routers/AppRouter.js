import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import LogIn from '../components/LogIn';

const history = createHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={LogIn} exact />
        <Route path="/dashboard" component={ExpenseDashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export { history };
export default AppRouter;