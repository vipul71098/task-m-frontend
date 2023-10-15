import styled from 'styled-components';

export const MainContentContainer = styled.div`
//   padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3F3F3;
`;



export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PlusIcon = styled.span`
  display: inline-block;
  margin-right: 8px; // or adjust as needed
  &:before {
    content: '+';
    // You can add more styling here if you need
  }
`;



export const ProjectText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

// export const Card = styled.div`
//   max-width: 500px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin: 20px 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;


// export const Card = styled.div`
//   display: flex;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
//   flex-direction: column;
//   align-items: center;
//   // max-width: 500px;
//   width: 60%; // adjust based on your preference
//   border: 1px solid #e0e0e0;  // adding a border for clarity, adjust as needed
//   padding: 20px;
// `;


export const Card = styled.div`
  display: flex;             // Flexbox to achieve side-by-side layout
  width: 60%;                // Adjust width as per requirements
  border: 1px solid #e0e0e0; 
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;   // White background for card
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Optional: Add a subtle shadow to the card
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;   // Keep content in column layout
  width: 60%;               // Occupy the remaining width of the card
`;
// export const CardImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin-right: 20px;
// `;

// export const CardImage = styled.img`
//   width: 300px; // adjust based on your preference
//   margin-bottom: 20px;  // space between image and content, adjust as needed
// `;

export const CardImage = styled.img`
  width: 40%;               // Adjust image width as required
  margin-right: 20px;       // Add space between image and content
`;



export const CardContent = styled.p`
  font-size: 16px;
  margin-top:20px;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin-top: 28px;
`;




export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const AppContainer = styled.div`
  display: flex;
`;

export const SearchBar = styled.input`
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const NavBarContainer = styled.div`
  width: 220px;
  background-color: #333;
  height: 100vh;
  padding: 20px 0;
  color: white;
`;



export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  background-color: ${props => props.active ? '#444' : 'transparent'};
  &:hover {
    background-color: #444;
  }
`;


export const Icon = styled.span`
  margin-right: 10px;
`;