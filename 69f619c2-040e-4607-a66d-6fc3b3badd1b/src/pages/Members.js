import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import classnames from 'classnames/bind';
import axios from 'axios';

import * as style from '../App.less';

const cx = classnames.bind(style);

function useMembers(teamId) {
  let [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.mocky.io/v2/5ca00c403300006e00a87dba?team=${teamId}`)
      .then(({ data }) => setMembers(data));
  }, [teamId]);

  return members;
}

export default function Members({ location, navigate, teamId }) {
  let members = useMembers(teamId);

  // map data to link objects for the breadcrumb component
  members = members.map(member => {
    let linkTo = `/teams/${teamId}/members/${member.id}`;
    let isActive = location.pathname.indexOf(linkTo) === 0;
    return { ...member, linkTo, isActive };
  });

  // get the active link to check if we need to redirect
  let activeLink = members.find(({ isActive }) => isActive);

  if (!activeLink && members.length) {
    // navigatge to the first member's details page
    navigate(members[0].linkTo, { replace: true });
  }

  return (
    <div className={style.MemberList}>
      <ul>
        {members.map((member, i) => (
          <li key={i}>
            <Link
              to={member.linkTo}
              className={cx({
                isActive: member.isActive
              })}
            >
              <span className={style.MemberListName}>
                {member.name.first}
                &nbsp;
                {member.name.last}
              </span>
              <span className={style.MemberListLocation}>
                {member.location.city}
                ,&nbsp;
                {member.location.state}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
