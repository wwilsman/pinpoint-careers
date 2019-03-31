import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';

import Flex from '../components/Flex';
import MembersList from '../components/MembersList';
import MemberDetails from './MemberDetails';

function useMembers(teamId) {
  let [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.mocky.io/v2/5ca00c403300006e00a87dba?team=${teamId}`)
      .then(({ data }) => setMembers(data));
  }, [teamId]);

  return members;
}

export default function Members({
  location,
  navigate,
  teamId,
  children
}) {
  let members = useMembers(teamId);

  // map data to link objects for the breadcrumb component
  members = members.map(member => {
    let linkTo = `/teams/${teamId}/members/${member.id}`;
    let isActive = location.pathname.indexOf(linkTo) === 0;
    return { ...member, linkTo, isActive };
  });

  let activeMember = members.find(({ isActive }) => isActive);

  return (
    <Flex direction="row" align="start">
      <MembersList members={members}/>

      {activeMember && (
        <div style={{ width: '70%' }}>
          {/* nested router to enable auto focus management and allow us to pass
            * along member details */}
          <Router>
            <MemberDetails path=":memberId" member={activeMember}/>
          </Router>
        </div>
      )}
    </Flex>
  );
}
