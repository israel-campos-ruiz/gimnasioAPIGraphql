import { IResolvers } from "graphql-tools";
import { ObjectId, ObjectID } from "mongodb";
import { getAllUsers ,getOneUserById, getAllInstructors, getOneInstrutorById, getOneActivityById } from "../lib/querysMongoDB";


const query: IResolvers = {
  Query: {
    async users(__: void, { user }, { db }) {
      return await getAllUsers(db);
        
    },
    async getActivities(__: void, { user }, { db }) {
      return await db
        .collection("activities")
        .aggregate([
          {
            $lookup: {
              from: "instructor",
              localField: "activitiesName",
              foreignField: "activities",
              as: "instructor"
            }
          }
        ])
        .toArray();
    },

    async getInstructors(__: void, { user }, { db }) {
      return await getAllInstructors(db)
    },

    

    async getUser(__: void, { _id }, { db }) {
        return await getOneUserById(db,_id);
    },

    async getInstructor(__:void, {_id}, {db}) {
        return await getOneInstrutorById(db,_id);
    },
    
    async getOneActivity(__:void, {_id}, {db}){
      return getOneActivityById(db, _id);
    }
    
  }
}

export default query;
