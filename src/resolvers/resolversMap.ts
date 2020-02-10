import {IResolvers} from 'graphql-tools';
import query from './query'
import mutation from './mutation';
import types from './types';

const resolvers : IResolvers = {
    ...query,
    ...mutation,
    ...types
}

export default resolvers;