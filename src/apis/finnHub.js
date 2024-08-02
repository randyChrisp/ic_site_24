import axios from "axios";

const TOKEN = "codmkm9r01qtukbjkhvgcodmkm9r01qtukbjki00";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
