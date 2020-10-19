const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        req
    })
});

mongoose
    .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        return server.listen({ port: process.env.PORT });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })