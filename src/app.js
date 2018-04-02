import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>Home PAGE!!!</div>

);
const AddExpensePage = () => (
  <div>ADD EXPENSE PAGE</div>
);

const EditExpansePage = () => (
  <div>EDIT EXPENSE PAGE</div>
);

const HelpPage = () => (
  <div>HELP PAGE</div>
);

const NotFoundPage = () => (
  <div>404!!!</div>
)
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpansePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));