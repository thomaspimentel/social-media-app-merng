const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({ req, pubsub })
});

mongoose
    .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        return server.listen({ port: process.env.PORT });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })