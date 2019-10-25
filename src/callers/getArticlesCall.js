import Axios from 'axios';

const getArticlesCall = () => {
  const URL = "http://localhost:3002/feed?total=3";
  return Axios.get(URL);
};

export default getArticlesCall;