const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("netrunner-graphql-schema");

const PORT = 4000;
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.listen(PORT, () => {
  console.log(`Netrunner Server listening on port ${PORT}`);
});
