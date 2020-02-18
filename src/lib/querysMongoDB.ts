import { ObjectId } from "mongodb";
import { Datetime } from "./dateTime";

export const getAllUsers = async (db: any) => {
  return await db
    .collection("users")
    .find()
    .toArray();
};

// obtenemos un solo usuario por el id

export const getOneUserById = async (db: any, _id: ObjectId) => {
  return await db.collection("users").findOne({ _id: new ObjectId(_id) });
};

// vamos a obtener las actividades de cada usuario esto va a ir al fichero types vale

export const getQuantityActivitiesByUser = async (
  db: any,
  activities: string
) => {
  const temporal = await db
    .collection("activities")
    .find({ activitiesName: activities })
    .toArray();
  return temporal;
};

// vamos a obtener todos los instructores

export const getAllInstructors = async (db: any) => {
  return await db
    .collection("instructor")
    .find()
    .toArray();
};

// vamos a obtener las actividades de los instructores

export const getQuantityActivitiesByInstructor = async (
  db: any,
  activities: string
) => {
  return await db
    .collection("activities")
    .find({ activitiesName: activities })
    .toArray();
};

// obtenemos el instructor por ID
export const getOneInstrutorById = async (db: any, _id: ObjectId) => {
  return await db.collection("instructor").findOne({ _id: new ObjectId(_id) });
};

// vamos a intentar obtener una sola actividad pero usando el match va

export const getOneActivityById = async (db: any, _id: ObjectId) => {
  return await db.collection("activities").aggregate([
    {
      $match: new ObjectId(_id)
    },
    {
      $lookup: {
        from: "instructor",
        localField: "activitiesName",
        foreignField: "activities",
        as: "instructor"
      }
    }
  ]);
};

/*===================== mutation de insertar =======================*/
let insertDate = () => {
  return new Datetime().getCurrentDateTime();
};

export const insertOneUser = async (db: any, user: any) => {
  user.registerDate = insertDate();
  await db.collection("users").insertOne(user);
  return user;
};

export const insertOneInstructor = async (db: any, instructor: any) => {
  instructor.registerDate = insertDate();
  await db.collection("instructor").insertOne(instructor);
  return instructor;
};



export const insertOneActivity = async (db:any, activity:any) =>{
  activity.registerDate = insertDate();
  await db.collection("activities").insertOne(activity);
  return activity;
}