import React from 'react';
import { Router, Redirect } from '@reach/router';

import Root from './components/Root';
import Team from './pages/Team';

export default function App() {
  return (
    <Router>
      <Root path="/">
        <Team path="/teams"/>
        {/* redirect since there are no other top-level routes */}
        <Redirect from="*" to="/teams" noThrow/>
      </Root>
    </Router>
  );
}
