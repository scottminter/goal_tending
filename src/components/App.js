import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import NewsFeed from "./NewsFeed/NewsFeed";

const App = props => {
  const [currentPage, setCurrentPage] = useState('news');

  const handlePageSet = (page) => {
    console.log('page: ', page);
  };

  return (
    <>
      <Header
        setCurrentPage={handlePageSet}
      />
      <Container>
        <NewsFeed />
      </Container>
    </>
  );
};

export default App;
