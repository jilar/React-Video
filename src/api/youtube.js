import axios from 'axios';

const KEY= 'AIzaSyChYfZIv9GLziY-qL-JhbrLgtAB6oVqeDo'

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/',
  params:{
    part:'snippet',
    maxResults:'5',
    key: KEY
  }
});
