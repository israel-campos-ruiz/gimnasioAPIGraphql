import { IResolvers } from "graphql-tools";

const mutation : IResolvers = {
    Mutation:{

         insertUser( ) {
            return 'prueba de insertar'
        }
        
    }
}

export default mutation;