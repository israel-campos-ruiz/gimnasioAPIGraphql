import { IResolvers } from "graphql-tools";
import { ObjectId } from "mongodb";
import { getQuantityActivitiesByUser, getQuantityActivitiesByInstructor } from "../lib/querysMongoDB";



const types: IResolvers = {
    User: {
        activities: async (parent:any, __:any , {db}) =>{
            return await getQuantityActivitiesByUser(db, parent.activities)
        }

        },
        Instructor:{
            activities: async(parent:any, __:any, {db}) =>{ 
                  
                
               
                return  await getQuantityActivitiesByInstructor(db, parent.activities)
            }
        }
   
   
  }



export default types;