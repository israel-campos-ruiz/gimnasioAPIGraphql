import dotenv from 'dotenv';

 const enviroments = dotenv.config({
    path: 'src/.env'
});

if (process.env.NODE_ENV !== 'production') {
    if (enviroments.error) {
        console.log(enviroments.error);
      
    }
}

export default enviroments