import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/datamovie-logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//Context
import { Context } from '../../context';
import { useContext } from 'react';

const Header = () => {
  const [user] = useContext (Context);
  console.log(user);

return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        {user ? (
          <span>Logged in as {user.username}</span>
        ) : (
          <Link to='/Login'>
            <span>Log in</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;