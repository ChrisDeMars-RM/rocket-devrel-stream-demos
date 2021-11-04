import React from 'react';

import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
