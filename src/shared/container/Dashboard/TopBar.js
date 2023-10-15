import React from 'react';
import { TopBarContainer, SearchBar } from './styles';

const TopBar = () => (
  <TopBarContainer>
    <h1>Huge Inc.</h1>
    <SearchBar placeholder="Search Projects, Surveys etc." />
  </TopBarContainer>
);

export default TopBar;
