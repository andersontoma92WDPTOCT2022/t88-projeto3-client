import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000",
  production: "LINK DA API DEPLOYADA AQUI SEM BARRA NO FINAL",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { api };
