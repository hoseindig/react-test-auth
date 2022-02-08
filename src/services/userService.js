import http from "./httpService";
// import { apiUrl } from "../config.json";
// import * as config from "../config.json";
import config from "../config";
const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
