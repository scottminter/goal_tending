import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './Header/Header';

const App = (props) => {

  return (
    <>
    <Header />
    <Container>
      Hello World!
    </Container>
    </>
  );
};

export default App;
