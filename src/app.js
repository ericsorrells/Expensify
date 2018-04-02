import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpansePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));