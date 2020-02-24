import { IResolvers } from "graphql-tools";
import {insertOneUser, insertOneInstructor, insertOneActivity, updateOneUser, getOneUserById}from "../lib/querysMongoDB";


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
        },
        async updateUser(_:void,{_id,user},{db}):Promise<any>{
        // return await db.collection('users').updateOne({_id:new ObjectId(_id)},{$set:user})
        return updateOneUser(db,_id,user)
         .then(
             async() =>{
                return{
                    status:true,
                    message:`usuario ${user.name} ${user.lastName} actualizado correctamente `,
                    user: getOneUserById(db,_id)
                }
            })
         .catch(
            async() =>{
                return{
                    status:false,
                    message:`el usuario no se pudo actualizar `
                }
             })    
        }
    }
}
export default mutation;