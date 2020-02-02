import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import './Navigation.scss';

export function SiteTitle() {
  return (
    <NavLink className='site-title' to=''>Michael Liu</NavLink>
  )
}

export function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        {/* <li><NavLink to='/about'>About</NavLink></li> */}
        <li><NavLink to='/resume' target='_blank'>Résumé</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation