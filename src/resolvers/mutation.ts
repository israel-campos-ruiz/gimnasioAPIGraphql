import { IResolvers } from "graphql-tools";
import {insertOneUser, insertOneInstructor, insertOneActivity}from "../lib/querysMongoDB";

const mutation : IResolvers = {
    Mutation:{

        async insertUser(__:void, {user}, {db}):Promise<any> {
             console.log(user);
            return insertOneUser(db,user)
        },

       async insertInstructor(__:void, {instructor}, {db}):Promise<any> {
            console.log(instructor);
            return insertOneInstructor(db,instructor);
        },
        async insertActivity(__:void, {activity}, {db}):Promise<any>{
            return insertOneActivity(db,activity);
        }

        
    }
}
export default mutation;