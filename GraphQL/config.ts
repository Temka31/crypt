import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { typeDefs } from './Resolves';
import initialState from './state';
import {CounterMutations} from "./Queries";

const cache = new InMemoryCache()

const client = new ApolloClient({
    uri: 'https://hasura.dev.cryptuoso.com/v1/graphql',
    cache,
    typeDefs,
    resolvers: {
        Mutation: {
            ...CounterMutations
        }
    }
});

cache.writeData({
    data: initialState,
});


export default client
