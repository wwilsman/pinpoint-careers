import React, { useState, useEffect, createRef } from 'react';
import { Link } from '@reach/router';
import classnames from 'classnames/bind';

import * as style from './Dropdown.less';
const cx = classnames.bind(style);

export default function Dropdown({ title, items, ...props }) {
  let [isOpen, toggleOpen] = useState(false);
  let ref = createRef();

  useEffect(() => {
    let onClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        toggleOpen(false);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  });

  return (
    <span {...props} className={cx('Dropdown', { isOpen })} ref={ref}>
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
