import React from 'react';
import classnames from 'classnames/bind';

import * as style from './Flex.less';
const cx = classnames.bind(style);

const titleCase = str => str[0].toUpperCase() + str.substr(1);

export default function Flex({
  direction,
  align,
  ...props
}) {
  return (
    <div
      {...props}
      className={cx('Flex', {
        [`FlexDirection${titleCase(direction)}`]: !!direction,
        [`FlexAlign${titleCase(align)}`]: !!align
      })}
    />
  );
}
