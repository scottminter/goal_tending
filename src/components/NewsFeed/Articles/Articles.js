import React, { useState, useEffect } from "react";
import Callers from '../../../callers';
import uuidv4 from 'uuid/v4';
import Article from './Article/Article';

const Articles = props => {
  const { corsProxy } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Callers.getArticles()
      .then(resp => {
        if (resp.data.length > 0) {
          const results = resp.data;
          let newArticles = results.map((article) => {
            const {
              author,
              content,
              guid,
              link,
              thumbnail,
              title,
              formattedPubDate,
              categories,
              source
            } = article;

            return {
              author,
              content,
              guid,
              link,
              thumbnail,
              title,
              formattedPubDate,
              categories,
              source,
            };
          });

          setArticles(
            [
              ...newArticles,
            ]
          );
        }
      })
      .catch(err => {
        console.error('error: ', err);
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
