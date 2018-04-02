import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
  <div>
    404!!! 
  </div>
)
 const Footer = () => (
   <div>Footer!!!</div>
 )

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink> | 
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> | 
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> | 
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpansePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));