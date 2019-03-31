import React from 'react';
import Header from '../Header';
import * as style from './Root.less';

export default function Root({ children }) {
  return (
    <div className={style.App}>
      <Header/>

      <div className={style.Content}>
        {children}
      </div>
    </div>
  );
}
