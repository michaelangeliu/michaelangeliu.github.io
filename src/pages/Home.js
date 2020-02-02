import React from 'react';
import Hourglass from '../components/Hourglass';
import Social from '../components/Social';
import {
  SiteTitle,
  Navigation
 } from '../components/Navigation';

import './Home.scss';

function Home() {
  return (
    <div className="home">
      <SiteTitle />
      <Navigation />
      <Hourglass />
      <Social />
    </div>
  );
}

export default Home;