import axios from 'axios';
import { parseCookies } from "nookies";


export function getAPIClient(ctx?: any) {
  
  const { 'tractian.token': token } = parseCookies(ctx);


  const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/tractian/fake-api'
  });


  api.interceptors.request.use(config => {
	  // console.log(config);
	  // return Promise.resolve(config)
	  return config;
  })

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}