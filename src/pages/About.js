import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  SiteTitle,
  Navigation
 } from '../components/Navigation';

import './About.scss';

function About() {
  return (
    <div className="about">
      <nav className="top-nav">
        <SiteTitle />
        <Navigation />
      </nav>
      
      <p>*under construction. :)</p>
      <p>Soon to be a compiled source of everything Michael Liu wants you to know about himself. He's a renaissance man of the modern era. Web developer. Aspiring Polyglot. Violinist. Dancer.</p>
    </div>
  );
}

export default About;