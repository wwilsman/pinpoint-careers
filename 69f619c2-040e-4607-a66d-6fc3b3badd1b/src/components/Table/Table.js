import React from 'react';
import * as style from './Table.less';

export default function Table({ head, items }) {
  return (
    <table className={style.Table}>
      <thead>
        <tr>
          {head.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((columns, i) => (
          <tr key={i}>
            {columns.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
