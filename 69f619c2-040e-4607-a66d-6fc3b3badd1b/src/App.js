import React from 'react';
import { Router, Redirect } from '@reach/router';

import Root from './components/Root';
import Teams from './pages/Teams';
import Members from './pages/Members';

export default function App() {
  return (
    <Router>
      <Root path="/">
        <Teams path="/teams">
          <Members path="/:teamId/members"/>
        </Teams>

        {/* redirect since there are no other top-level routes */}
        <Redirect from="*" to="/teams" noThrow/>
      </Root>
    </Router>
  );
}
