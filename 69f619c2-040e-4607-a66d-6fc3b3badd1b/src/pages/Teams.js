import React, { useState, useEffect, Fragment } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

import Breadcrumb from '../components/Breadcrumb';
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

export default function Teams({ location, children }) {
  let teams = useTeams();

  // map data to link objects for the breadcrumb component
  let teamLinks = teams.map(team => {
    let title = team.name;
    let linkTo = `/teams/${team.id}/members`;
    return { title, linkTo };
  });

  // get the active link for the dropdown title
  let activeLink = teamLinks.find(({ linkTo }) => {
    return location.pathname.indexOf(linkTo) === 0;
  });

  // remove the active link from the list
  teamLinks = teamLinks.filter(link => link !== activeLink);

  let breadcrumbs = [{
    title: 'Teams'
  }, {
    title: activeLink ? activeLink.title : '...',
    nav: teamLinks.length ? teamLinks : null
  }];

  return (
    <Fragment>
      <Breadcrumb items={breadcrumbs}/>

      {children}
    </Fragment>
  );
}
