import {RestaurantMenuApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {RestaurantMenuApplication};

export async function main(options?: ApplicationConfig) {
  const app = new RestaurantMenuApplication(options);
  await app.boot();
  await app.start();
  return app;
}
