import React from 'react';

import RMDBLogo from '../../images/react-logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMBDLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            <TMBDLogoImg src={TMBDLogoImg} alt='tmdb_logo' />
        </Content>
    </Wrapper>
)