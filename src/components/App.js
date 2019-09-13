import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';
import NewsFeed from './NewsFeed/NewsFeed';

const App = (props) => {

  return (
    <>
      <Header />
      <Container>
        <NewsFeed />
      </Container>
    </>
  );
};

export default App;
