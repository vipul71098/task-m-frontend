import React from 'react';
import { NavBarContainer, NavItem, Icon } from './styles';
import { FaInbox, FaTasks, FaClipboardList, FaChartBar, FaDatabase, FaCogs } from 'react-icons/fa';

// const NavBar = ({ selected, setSelected }) => (
//   <NavBarContainer>
//     <NavItem active={selected === 'project'} onClick={() => setSelected('project')}>Project</NavItem>
//     <NavItem active={selected === 'user'} onClick={() => setSelected('user')}>User</NavItem>
//   </NavBarContainer>
// );

// export default NavBar;

const NavBar = ({ selected, setSelected }) => (
  <NavBarContainer>
    <NavItem active={selected === 'project'} onClick={() => setSelected('project')}>
      <Icon><FaInbox /></Icon>
      Project
    </NavItem>
    <NavItem active={selected === 'user'} onClick={() => setSelected('user')}>
      <Icon><FaTasks /></Icon>
      User
    </NavItem>
    <NavItem active={selected === 'survey'} onClick={() => setSelected('survey')}>
      <Icon><FaClipboardList /></Icon>
      Survey
    </NavItem>
    <NavItem active={selected === 'templates'} onClick={() => setSelected('templates')}>
      <Icon><FaChartBar /></Icon>
      Templates
    </NavItem>
    <NavItem active={selected === 'reports'} onClick={() => setSelected('reports')}>
      <Icon><FaDatabase /></Icon>
      Reports
    </NavItem>
    <NavItem active={selected === 'customProcess'} onClick={() => setSelected('customProcess')}>
      <Icon><FaCogs /></Icon>
      Custom Process
    </NavItem>
    {/* Add other navigation items */}
  </NavBarContainer>
);

export default NavBar;
