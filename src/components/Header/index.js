import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/datamovie-logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMBDLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMBDLogoImg src={TMDBLogo} alt='tmdb_logo' />
        </Content>
    </Wrapper>
);

export default Header;