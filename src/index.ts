import { Redis } from "ioredis";
import { Connection } from "mongoose";

export interface IContext {
  mongoDb: {
    instance: Connection;
  };
  redisDb: {
    instance: Redis;
  };
}
