import React from 'react';
import * as style from './MemberNav.less';

export default function MemberNav() {
  return (
    <ul className={style.MemberNav}>
      <li className={style.isActive}>Recent Files</li>
      <li>Recent Commits</li>
      <li>Recent Issues</li>
    </ul>
  )
}
