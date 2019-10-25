const BProm = require('bluebird');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const config = require('./../../config.json');
/**
 * Use https://rss2json.com/ to transform your feed into JSON
 */
module.exports = (numOfArticles = 1) => {
  const URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhoopshype.com%2Ffeed%2F&api_key=${config.rss_to_json_api_key}`;
  return new BProm((resolve, reject) => {
    axios.get(URL)
      .then((resp) => {
        const data = _.get(resp, 'data.items');
        const articles = [];
        data.forEach((article, i) => {
          if (i < numOfArticles) {
            articles.push({
              guid: _.get(article, 'guid'),
              author: _.get(article, 'author'),
              link: _.get(article, 'link'),
              thumbnail: _.get(article, 'thumbnail'),
              title: _.get(article, 'title'),
              pubDate: _.get(article, 'pubDate'),
              formattedPubDate: moment(_.get(article, 'pubDate')).format('dddd, MMMM Do YYYY, h:mm a'),
              content: _.get(article, 'content'),
              categories: _.get(article, 'categories'),
              source: 'Hoops Hype',
            });
          }
        });
        return resolve(articles);
      })
      .catch((err) => {
        reject(err);
      });
  });
};