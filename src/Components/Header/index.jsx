import React from 'react';
import { ReactComponent as ExitIcon } from '../../img/icon-exit.svg';

const Header = () => (
  <div className = "Header">
    <nav>
      <ul>
        <li>Связаться с банком</li>
        <li>Офисы и банкоматы</li>
        <li className = "icon__exit"><ExitIcon /></li>
        <li>Выйти</li>
      </ul>
    </nav>
  </div>
)

export default Header;
