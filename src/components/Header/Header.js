import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Header.module.css";
import {pages} from '../../constants';
import Icon from '@material-ui/core/Icon';
import SportsBasketballRoundedIcon from '@material-ui/icons/SportsBasketballRounded';

const Header = props => {
  const linkClickedHandler = event => {
    const clickedId = event.target.id;
    const { setCurrentPage } = props;

    switch (clickedId) {
      case pages.HOME:
      case pages.NEWS:
        setCurrentPage(clickedId);
        break;
      case pages.STATS:
        setCurrentPage(clickedId);
        break;
      default:
        setCurrentPage(pages.NEWS);
    }
  };

  return (
    <Row className={style.Header}>
      <Col
        sm={9}
        id={pages.HOME}
        className={`${style.SiteName} ${style.Link}`}
        onClick={linkClickedHandler}
      >
        <Icon className={style.Icon}>
          <SportsBasketballRoundedIcon />
        </Icon>
        GoalTending
      </Col>
      <Col
        sm={1}
        id={pages.NEWS}
        className={`${style.Link}`}
        onClick={linkClickedHandler}
      >
        News
      </Col>
    </Row>
  );
};

export default Header;
