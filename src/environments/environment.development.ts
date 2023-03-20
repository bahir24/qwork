import {IEnvironment} from "../app/models/environment";
const PROTOCOL = 'http';
const HOST = '178.208.86.93';
const PORT = 3000;

export const environment: IEnvironment = {
  protocol: PROTOCOL,
  host: HOST,
  port: PORT,
  server: PROTOCOL + '://' + HOST + ':' + PORT
};
