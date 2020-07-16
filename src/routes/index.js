import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

// Pages
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
