import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from './Header.module.css';
import { NEWS, HOME, STATS } from './constants';

const Header = (props) => {
  const linkClickedHandler = (event) => {
    const clickedId = event.target.id;
    switch (clickedId) {
      case HOME:
      case NEWS:
        console.log('go home/news');
        break;
      case STATS:
        console.log('go stats');
        break;
      default:
        console.log('go default');
    }
  };

  return (
    <Row className={style.Header}>
      <Col sm={9} id={HOME} className={`${style.SiteName} ${style.Link}`} onClick={linkClickedHandler} >HEADER</Col>
      <Col sm={1} id={NEWS} className={`${style.Link}`} onClick={linkClickedHandler} >News</Col>
      <Col sm={1} id={STATS} className={`${style.Link}`} onClick={linkClickedHandler} >Stats</Col>
    </Row>
  );
};

export default Header;
