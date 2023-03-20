import {IEnvironment} from "../app/models/environment";
const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 3000;

export const environment: IEnvironment = {
  protocol: PROTOCOL,
  host: HOST,
  port: PORT,
  server: PROTOCOL + '://' + HOST + ':' + PORT
};
