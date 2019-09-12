import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={Styles.Header}>
      <span className={`${Styles.SiteName} ${Styles.Item}`}>HEADER</span>
      <span className={`${Styles.Link}  ${Styles.Item}`}>News</span>
      <span className={Styles.Link}>Stats</span>
    </div>
  );
};

export default Header;
