import React from 'react';
import { MainContentContainer, Card, PlusIcon, CardTitle, CardContent, Button , ProjectText ,TopContainer, ContentContainer, CardImage} from './styles';

const MainContent = ({ selected }) => (
  <MainContentContainer>
    {selected === 'project' && (
      <>
      <TopContainer>
      <ProjectText>All Projects Showing All</ProjectText>
      <Button><PlusIcon />Start New Project</Button>
      </TopContainer>
      <Card>
        <CardImage src="https://i.ibb.co/6RJ5hq6/gaben.jpg" alt="Image Description" />
        <ContentContainer>
          <CardTitle>Welcome to Huge!</CardTitle>
          <CardContent>
            With toddle create a clear framework for your marketing, user, and product research and manage findings into a collective repository accessible anytime.
          </CardContent>
          <Button><PlusIcon />Start New Project</Button>
        </ContentContainer>
      </Card>
      </>
    )}
    {selected === 'user' && <div>User content</div>}
    {/* Add content for other navigation items */}
  </MainContentContainer>
);



export default MainContent;
