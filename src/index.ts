import Server from './2.infrastructure/ioc';
import container from './2.infrastructure/ioc/container';

const server = <Server>container.resolve("app");

server.start();