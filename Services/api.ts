// import { AssetsType } from "../Interface/AssetsType";
import { getAPIClient } from "./axios";

export const api = getAPIClient();

export function GET_ASSETS() {
  return new Promise((resolve, reject) => {
    api.get("assets").then(({data}: any) => {
    resolve(data)
    }).catch(err => {
      reject(err);
    })
  });
}