import { Server } from './app/http/server';
import { config } from './app/config';

const server = Server(config);

server.start();