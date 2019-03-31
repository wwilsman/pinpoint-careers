import React from 'react';
import { Link } from '@reach/router';
import classnames from 'classnames/bind';

import * as style from './MembersList.less';
const cx = classnames.bind(style);

export default function MembersList({ members }) {
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
