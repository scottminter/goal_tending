const BProm = require('bluebird');
const _ = require('lodash');
const moment = require('moment');
const HoopsHype = require('./hoopsHype');
const RealGM = require('./realGM');

module.exports = getArticles = (numOfArticles) => {
  let allArticles = [];
  return new BProm((resolve, reject) => {
    HoopsHype.getArticles(numOfArticles)
    .then(hhArticles => {
      allArticles = [
        ...allArticles,
        ...hhArticles,
      ];

      return RealGM.getArticles(numOfArticles);
    })
    .then(rgArticles => {
      allArticles = [
        ...allArticles,
        ...rgArticles
      ];

      const sortedArticles = _.sortBy(allArticles, (article) => {
        return new moment(article.pubDate).format();
      }).reverse();

      resolve(sortedArticles);
    })
    .catch(err => {
      console.log('error: ', err);
    });
  });
};
