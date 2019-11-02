import React, {useState} from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import style from './Article.module.css';

const Article = props => {
  const [hideContent, setHideContent] = useState(true);
  const [readMore, setReadMore] = useState('Read More...');
  const {image, link, title, author, pubDate, categories, content, source} = props;

  const renderCategories = (categories) => {
    if (!categories) {
        return <div></div>;
    }
    return <div>Tags: {categories.join(', ')}</div>;
  };

  const showContentClickHandler = (event) => {
    if (hideContent) {
      setHideContent(false);
      setReadMore('Read Less...');
    } else {
      setHideContent(true);
      setReadMore('Read More...');
    }
  };

  return (
    <Container className={style.Article}>
      <Row>
        <Col xs={12} md={4} className={style.Image}>
          <img src={image} alt='thumbnail for article'></img>
        </Col>
        <Col xs={12} md={8}>
          <div className={style.ArticleInfo}>
            <Row className={style.ArticleTitle}>
              <a href={link} target='blank'>{title}</a>
            </Row>
            <Row className={style.Author}>
              {author ? `${author} at ${source}` : source}
            </Row>
            <Row className={style.PubDate}>
              {pubDate}
            </Row>
            <Row className={style.Categories}>
              {renderCategories(categories)}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" onClick={showContentClickHandler}>{readMore}</Button>
          <div hidden={hideContent} dangerouslySetInnerHTML={{__html: content}} />
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
