import axios from "axios";

const ts = "1629337778";
const apikey = "4ca86ca947450e5b913b083d7d369486";
const hash = "1c7c3987e5a08e6a707afef4899d94f1";

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public`,
  params: {
    ts,
    apikey,
    hash,
    limit: 100,
  },
});

export default api;
