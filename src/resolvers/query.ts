import { IResolvers } from "graphql-tools";
import { ObjectId, ObjectID } from "mongodb";
import { getAllUsers ,getOneUserById } from "../lib/querysMongoDB";


const query: IResolvers = {
  Query: {
    async users(__: void, { user }, { db }) {
      return await getAllUsers(db);
        // .collection("users").find({})
        // .aggregate([
        //   {
        //     $lookup: {
        //       from: "activities",
        //       localField: "activities",
        //       foreignField: "activitiesName",
        //       as: "activities"
        //     }
        //   }
        // ])
        // .toArray();
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
      return await db
        .collection("instructor")
        .aggregate([
          {
            $lookup: {
              from: "activities",
              localField: "activities",
              foreignField: "activitiesName",
              as: "activities"
            }
          }
        ])
        .toArray();
    },

    

    async getUser(__: void, { _id }, { db }) {
        return await getOneUserById(db,_id);
    }
  }
}

export default query;
