import React from 'react';
import * as style from '../App.less';

export default function Header() {
  return (
    <div className={style.Header}>
      <svg data-name="Pinpoint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 899.92 899.92">
        <title>Pinpoint</title>
        <path fill="currentColor" d="M500,50C251.89,50,50,251.89,50,500S251.89,950,500,950,950,748.11,950,500,748.11,50,500,50Zm-3.71,759.52h-69a32,32,0,0,1-32-32V676.15l-.29-.08a249.41,249.41,0,0,1-168.75-236c0-137.46,111.79-249.3,249.22-249.41l20.44-.24h.37C667,190.44,805.85,329.31,805.85,500S667,809.56,496.29,809.56Z" transform="translate(-50.04 -50.04)"/>
        <path fill="currentColor" d="M496.47,254.36,476,254.6h-.37c-102.28,0-185.49,83.21-185.49,185.49,0,71.34,39.75,134.07,100.73,165.08a129,129,0,0,0,53.18,14.75h56.44A105.84,105.84,0,0,0,606.25,514.2V501.83a84.78,84.78,0,0,0-84.69-84.68H459.21V578.37h-8.74c-21-.57-44-10.58-55.19-24.31V385.19a32,32,0,0,1,32-32h94.31c81.94,0,148.61,66.67,148.61,148.61V514.2c0,93.54-76.1,169.64-169.64,169.64H459.21v61.8h37.08c135.44,0,245.64-110.19,245.64-245.63S631.83,254.46,496.47,254.36Z" transform="translate(-50.04 -50.04)"/>
      </svg>

      <ul className={style.Menu}>
        <li className="active">
          <i className="fas fa-users" /> Teams
        </li>
        <li>
          <i className="fas fa-user" /> People
        </li>
        <li>
          <i className="fas fa-route" /> Work
        </li>
      </ul>

      <div className={style.MenuUser}>
        <i class={`far fa-user-circle ${style.Avatar}`} />
        <i class="fas fa-ellipsis-v" />
      </div>
    </div>
  );
}
