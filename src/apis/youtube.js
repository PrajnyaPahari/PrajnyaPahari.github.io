import axios from "axios";
const KEY = "AIzaSyC_BVW61AuY8CFkboZbYQeqsIB78sT890U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 10,
    key: KEY
  },
});
