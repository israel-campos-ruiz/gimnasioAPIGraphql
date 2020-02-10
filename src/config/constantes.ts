import enviroments from './enviroments';


    if(process.env.NODE_ENV != 'production'){
        const enviroment = enviroments  
    } 
    export const SECRET_KEY = process.env.SECRET_KEY;
