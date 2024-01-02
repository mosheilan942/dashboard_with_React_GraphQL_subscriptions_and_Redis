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

interface MyContext {
    // we'd define the properties a user should have
    // in a separate user interface (e.g., email, id, url, etc.)
    user: String;
  }

const corsOptions = {
    origin: "http://localhost:8000",
    credentials: true 
};

app.use(cors(corsOptions))
app.use(morgan("dev"))

const schema = makeExecutableSchema({ typeDefs, resolvers });

const httpServer = createServer(app);

const apolloServer = new ApolloServer({
    schema,
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),

        // Proper shutdown for the WebSocket server.
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await wsServerCleanup.dispose();
                    },
                };
            },
        },
    ],
});

const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
});

const wsServerCleanup = useServer({ schema }, wsServer);
(async function () {
    // starting the apollo server to expose endoint to client
    await apolloServer.start();
    app.use("/graphql", bodyParser.json(), expressMiddleware(apolloServer, {
        context: async ({ req }) => ({ token: req.headers.cookie }),
    }));
})();


httpServer.listen(port, () => {
    checkConnection()
    console.log(`🚀 Query endpoint ready at http://localhost:${port}/graphql`);
    console.log(
        `🚀 Subscription endpoint ready at ws://localhost:${port}/subscriptions`
    );
});



