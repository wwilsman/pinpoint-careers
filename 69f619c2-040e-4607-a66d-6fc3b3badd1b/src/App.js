import React from 'react';
import { Router, Redirect } from '@reach/router';

import Root from './components/Root';
import Teams from './pages/Teams';

export default function App() {
  return (
    <Router>
      <Root path="/">
        <Teams path="/teams"/>
        {/* redirect since there are no other top-level routes */}
        <Redirect from="*" to="/teams" noThrow/>
      </Root>
    </Router>
  );
}
