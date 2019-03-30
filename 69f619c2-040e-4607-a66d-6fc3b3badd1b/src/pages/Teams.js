import React, { useState, useEffect, Fragment } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

import * as style from '../App.less';

function useTeams() {
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5c9d99d133000056003f2385')
      .then(({ data }) => {
        // navigatge to the first team's members page
        navigate(`/teams/${data[0].id}/members`, { replace: true });
        setTeams(data)
      });
  }, []);

  return teams;
}

export default function Teams({ children }) {
  let teams = useTeams();

  return (
    <Fragment>
      <div className={style.Breadcrumb}>
        Teams >
        <ul>
          {teams.map(team => (
            <li key={team.id}>
              <Link to={`/teams/${team.id}/members`}>
                {team.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {children}
    </Fragment>
  );
}
