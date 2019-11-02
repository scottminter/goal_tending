import React, { useState, useEffect } from "react";
import Callers from '../../../callers';
import uuidv4 from 'uuid/v4';
import Article from './Article/Article';
import {feed} from '../../../constants';

const Articles = props => {
  const corsProxy = feed.CORS_PROXY;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Callers.getArticles()
      .then(articles => {
        setArticles([
          ...articles
        ]);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }, [corsProxy]);

  const renderArticles = () => {
    const hhArticles = articles.map((article) => {
      return (
        <Article
          key={uuidv4()}
          image={article.thumbnail}
          link={article.link}
          title={article.title}
          author={article.author}
          pubDate={article.formattedPubDate}
          categories={article.categories}
          content={article.content}
          source={article.source}
        />
      );
    });

    return hhArticles;
  }

  return (
    <div>
      {renderArticles()}
    </div>
  );
};

export default Articles;
