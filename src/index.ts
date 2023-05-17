import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import { userTypeDefs } from "./user/user.typeDefs";
import { userResolvers } from "./user/user.resolvers";

const server = new ApolloServer({
  typeDefs: mergeTypeDefs([userTypeDefs]),
  resolvers: mergeResolvers([userResolvers]),
});

const app = express();
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
  const PORT = 4000;
  app.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}${server.graphqlPath}`);
  });
}
startApolloServer();