import React, { useState } from 'react';
import { Link } from '@reach/router';
import classnames from 'classnames/bind';

import * as style from '../App.less';

const cx = classnames.bind(style);

export default function Dropdown({ title, items, ...props }) {
  let [isOpen, toggleOpen] = useState(false);

  return (
    <span {...props} className={cx('Dropdown', { isOpen })}>
      <span onClick={() => toggleOpen(!isOpen)}>
        {title}
      </span>

      <ul>
        {items.map(({ title, linkTo }, i) => (
          <li key={i} onClick={() => toggleOpen(false)}>
            <Link to={linkTo}>{title}</Link>
          </li>
        ))}
      </ul>
    </span>
  )
}
