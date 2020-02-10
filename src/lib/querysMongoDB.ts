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