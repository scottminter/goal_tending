import BProm from 'bluebird';
import moment from 'moment';
import _ from 'lodash';
import {hoopsHype, realGM} from './feeds';

const getArticles = () => {
  let articles = [];
  return new BProm((resolve, reject) => {
    hoopsHype().then(data => {
      articles = [
        ...articles,
        ...data
      ];
      return realGM();
    })
    .then(data => {
      articles = [
        ...articles,
        ...data
      ];

      // this needs to be called last after all the articles have been retrieved
      const sortedArticles = _.sortBy(articles, (article) => {
        return new moment(article.pubDate).format();
      }).reverse();

      resolve(sortedArticles);
    })
    .catch(err => {
      console.log('error: ', err);
    });
  });
};

export default getArticles;
