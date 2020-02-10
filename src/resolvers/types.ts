import { IResolvers } from "graphql-tools";
import { ObjectId } from "mongodb";
import { getQuantityActivitiesByUser } from "../lib/querysMongoDB";



const types: IResolvers = {
    User: {
        activities: async (parent:any, __:any , {db}) =>{
            return await getQuantityActivitiesByUser(db, parent.activities)
        }

        }
   
  }



export default types;