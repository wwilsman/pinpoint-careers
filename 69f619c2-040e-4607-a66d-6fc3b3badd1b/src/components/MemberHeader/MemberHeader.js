import React from 'react';

import * as style from './MemberHeader.less';

export default function MemberHeader({
  name,
  title,
  location,
  avatar
}) {
  let fullName = `${name.first} ${name.last}`;

  return (
    <div className={style.MemberHeader}>
      <div className={style.MemberAvatar}>
        <img alt={fullName} src={avatar}/>
      </div>
      <div className={style.MemberInfo}>
        <h1>{fullName}</h1>
        <h2>{title}</h2>
        <p>{location.city}, {location.state}</p>
      </div>
    </div>
  );
}
