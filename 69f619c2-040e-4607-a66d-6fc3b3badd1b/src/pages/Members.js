import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MembersList from '../components/MembersList';

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

  return (
    <MembersList members={members}/>
  );
}
