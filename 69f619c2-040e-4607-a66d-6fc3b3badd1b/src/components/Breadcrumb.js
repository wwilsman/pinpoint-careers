import React from 'react';
import { Link } from '@reach/router';

import Dropdown from './Dropdown';
import * as style from '../App.less';

export default function Breadcrumb({ items }) {
  return (
    <div className={style.Breadcrumb}>
      {items.map(({ title, linkTo, nav }, i) => (
        nav ? (
          <Dropdown key={i} title={title} items={nav}/>
        ) : (
          <span key={i}>
            {linkTo ? <Link to={linkTo}>{title}</Link> : title}
          </span>
        )
      ))}
    </div>
  );
}
