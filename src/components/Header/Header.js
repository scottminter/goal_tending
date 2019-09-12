import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Styles from './Header.module.css';

const Header = (props) => {
  return (
    <Row className={Styles.Header}>
      <Col sm={8} className={`${Styles.SiteName} ${Styles.Item}`}>HEADER</Col>
      <Col sm={1} className={`${Styles.Link}  ${Styles.Item}`}>News</Col>
      <Col sm={1} className={`${Styles.Link} ${Styles.Item}`}>Stats</Col>
    </Row>
  );
};

export default Header;
