export interface IContext {
    mongodb: {
        uri: string;
        options: {
            useNewUrlParser?: boolean;
            useUnifiedTopology?: boolean;
            ssl?: boolean;
            sslValidate?: boolean;
            socketTimeoutMS?: number;
            connectTimeoutMS?: number;
            serverSelectionTimeoutMS?: number;
            dbName?: string;
        };
    };
    redisDb: {
        uri: string;
    };
}
