// // import React from 'react';


// // const Dashboard = () => (
// //  <div>
// //     <h1>Welcome to Dashboard</h1>
// //  </div>
// // );

// // export default Dashboard;


// import React, { useState } from 'react';
// import styled from 'styled-components';

// // --- TopBar Component ---
// const TopBarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 20px;
//   background-color: #fff;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
// `;


// const SearchBar = styled.input`
//   padding: 8px 15px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Card = styled.div`
//   max-width: 400px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin: 20px 0;
// `;

// const CardContent = styled.p`
//   font-size: 16px;
// `;

// const CardTitle = styled.h2`
//   font-size: 24px;
// `;

// const TopBar = () => (
//   <TopBarContainer>
//     <h1>Huge Inc.</h1>
//     <SearchBar placeholder="Search Projects, Surveys etc." />
//     {/* Add other elements like 'Product Tour' and profile information */}
//   </TopBarContainer>
// );

// // --- NavBar Component ---
// const NavBarContainer = styled.div`
//   width: 220px;
//   background-color: #333;
//   height: 100vh;
//   padding: 20px 0;
//   color: white;
// `;

// const NavItem = styled.div`
//   padding: 15px 20px;
//   cursor: pointer;
//   background-color: ${props => props.active ? '#444' : 'transparent'};
//   &:hover {
//     background-color: #444;
//   }
// `;


// const NavBar = ({ selected, setSelected }) => (
//     <NavBarContainer>
//       <NavItem active={selected === 'project'} onClick={() => setSelected('project')}>Project</NavItem>
//       <NavItem active={selected === 'user'} onClick={() => setSelected('user')}>User</NavItem>
//       {/* Add other navigation items */}
//     </NavBarContainer>
//   );
// // --- MainContent Component ---
// const MainContentContainer = styled.div`
//   padding: 40px;
// `;

// // const MainContent = ({ selected }) => (
// //     <MainContentContainer>
// //       {selected === 'project' && <div>Project Content</div>}
// //       {selected === 'user' && <div>PUser content</div>}
// //       {/* Add content for other navigation items */}
// //     </MainContentContainer>
// //   );

// const MainContent = ({ selected }) => (
//     <MainContentContainer>
//       {selected === 'project' && (
//         <Card>
//           <CardTitle>Welcome to Huge!</CardTitle>
//           <CardContent>
//             With toddle create a clear framework for your marketing, user, and product research and manage findings into a collective repository accessible anytime.
//           </CardContent>
//           <button>Start New Project</button>
//         </Card>
//       )}
//       {selected === 'user' && <div>User content</div>}
//       {/* Add content for other navigation items */}
//     </MainContentContainer>
//   );

// // --- Main App Component ---
// const AppContainer = styled.div`
//   display: flex;
// `;



// const Dashboard = () => {
//     const [selected, setSelected] = useState('inbox'); // default to 'inbox'
  
//     return (
//       <div>
//         <TopBar />
//         <AppContainer>
//           <NavBar selected={selected} setSelected={setSelected} />
//           <MainContent selected={selected} />
//         </AppContainer>
//       </div>
//     );
//   };
  
//   export default Dashboard;


import React, { useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import MainContent from './MainContent';
import { AppContainer } from './styles'; 

const Dashboard = () => {
    const [selected, setSelected] = useState('inbox');

    return (
      <div>
        <TopBar />
        <AppContainer>
          <NavBar selected={selected} setSelected={setSelected} />
          <MainContent selected={selected} />
        </AppContainer>
      </div>
    );
};

export default Dashboard;
