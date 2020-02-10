import {MongoClient} from 'mongodb';

export class DataBase{
    async init(){
        try {
            const MONGODB = String(process.env.DATABASE);
            const CLIENT = await MongoClient.connect(MONGODB,
                 {useNewUrlParser : true, useUnifiedTopology : true});
            const db = CLIENT.db();
            if(CLIENT.isConnected()){
                console.log(`base de datos local corriendo en el puerto 27017 ${db.databaseName}`);
                
            }
            return db
        } catch  {
            console.log(Error);
            
        }
    }
}