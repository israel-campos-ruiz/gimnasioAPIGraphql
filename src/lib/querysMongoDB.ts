import { ObjectId } from "mongodb"

/* juntamos las colecciones de usuarios y actividades 
db.users.aggregate([
    {
      $lookup: {
        from: "activities",
        localField: "activities",
        foreignField: "activitiesName",
        as: "activities"
      },

      $lookup:{
        from: "instructor",
        localField: "activities",
        foreignField: "activities",
        as: "instructor"
      }

    }
  ]).pretty();
  */
// obtenemos todos los usuarios de la coleccion users vamos a rehacer olvidate del aggregate
//arriba pondré la query comentada de todas formas para que lo recurdes xdxd

export const getAllUsers = async (db:any) => {
        return await db.collection('users').find().toArray();
}


// obtenemos un solo usuario por el id 

export const getOneUserById = async (db:any, _id:ObjectId) =>{
    return await db.collection('users').findOne({_id:new ObjectId(_id)});
}


// vamos a obtener las actividades de cada usuario esto va a ir al fichero types vale 

export const getQuantityActivitiesByUser = async (db:any,activities:string ) =>{
    const temporal =  await db.collection('activities').find({activitiesName:activities}).toArray();
    return temporal
}

// vamos a obtener todos los instructores

export const getAllInstructors = async (db:any,) =>{
  return await db.collection('instructor').find().toArray();
}

// vamos a obtener las actividades de los instructores 

export const getQuantityActivitiesByInstructor = async (db:any, activities:string) =>{
 

  return await db.collection('activities').find({activitiesName:activities}).toArray()
}

// obtenemos el instructor por ID 
export const getOneInstrutorById = async (db:any, _id:ObjectId) =>{
  return await db.collection('instructor').findOne({_id:new ObjectId(_id)});
}


// vamos a intentar obtener una sola actividad pero usando el match va 

export const getOneActivityById = async (db:any, _id:ObjectId) => {
  return await db
  .collection("activities")
  .aggregate([
    {
      $match : new ObjectId(_id)
    },
    {
      $lookup: {
        from: "instructor",
        localField: "activitiesName",
        foreignField: "activities",
        as: "instructor"
      }
    }
  ])
}



