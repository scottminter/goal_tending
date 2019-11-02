import BProm from 'bluebird';
import moment from 'moment';
import _ from 'lodash';
import {feed} from '../../constants';

const getHoopsHypeFeed = () => {
  const URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhoopshype.com%2Ffeed%2F&api_key=${feed.RSS_TO_JSON_KEY}`;
  return new BProm((resolve, reject) => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        const items = data.items;
        const articles = [];
        items.forEach(article => {
          articles.push({
            guid: _.get(article, 'guid'),
            author: _.get(article, 'author'),
            link: _.get(article, 'link'),
            thumbnail: _.get(article, 'thumbnail'),
            title: _.get(article, 'title'),
            pubDate: _.get(article, 'pubDate'),
            formattedPubDate: moment(_.get(article, 'pubDate')).format(feed.MOMENT_FORMAT),
            content: _.get(article, 'content'),
            categories: _.get(article, 'categories'),
            source: 'Hoops Hype',
          });
        });

        resolve(articles);
      })
      .catch(err => {
        console.error('Error: ', err);
      })
  });
};

export default getHoopsHypeFeed;
