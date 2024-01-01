var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// npm services
import { ApolloServer } from "@apollo/server";
import { WebSocketServer } from "ws";
import { createServer } from "http";
import express from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from "morgan";
// local services
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import checkConnection from "./mongoose/mongooseConnection.js";
const port = 4000;
const app = express();
const corsOptions = {
    origin: "http://localhost:8000",
    credentials: true
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
const schema = makeExecutableSchema({ typeDefs, resolvers });
const httpServer = createServer(app);
const apolloServer = new ApolloServer({
    schema,
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),
        // Proper shutdown for the WebSocket server.
        {
            serverWillStart() {
                return __awaiter(this, void 0, void 0, function* () {
                    return {
                        drainServer() {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield wsServerCleanup.dispose();
                            });
                        },
                    };
                });
            },
        },
    ],
});
const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
});
const wsServerCleanup = useServer({ schema }, wsServer);
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // starting the apollo server to expose endoint to client
        yield apolloServer.start();
        app.use("/graphql", bodyParser.json(), expressMiddleware(apolloServer, {
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () { return ({ token: req.headers.cookie }); }),
        }));
    });
})();
httpServer.listen(port, () => {
    checkConnection();
    console.log(`🚀 Query endpoint ready at http://localhost:${port}/graphql`);
    console.log(`🚀 Subscription endpoint ready at ws://localhost:${port}/subscriptions`);
});
