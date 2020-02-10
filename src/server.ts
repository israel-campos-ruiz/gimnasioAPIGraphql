import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import schema from './schemas';
import { DataBase } from './config/dataBase';
import enviroment from './config/enviroments';


/*aqui va la comprobacion si estamos o no en produccion la ponemos en un momento */

if(process.env.NODE_ENV !== 'production'){
    const envs = enviroment
    console.log(envs);
    
}

async function init() {
    const app = express();
    app.use('*', cors());
    app.use(compression());
    /*aqui va a ir la conexion a la base de datos*/
    /*aqui va a venir el contexto de los esquemas.graphql recuerda que el contexto 
       es todos los recursos que van a compartir por ejemplo la base de datos un token etc.
    */
    const database = new DataBase();
    const db = await database.init();

    const context:any = async({req, connetion}:any) =>{
        return {
            db
        }
    }       

    const server = new ApolloServer({
        schema,
        context,
        introspection: true
    });

    server.applyMiddleware({ app });

    const PORT = process.env.PORT;
    const httpServer = createServer(app);
    httpServer.listen({ port: PORT }, () => {
        console.log(`http://localhost:${PORT}/graphql`);

    })
}

init();