//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
let urlDb;

if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
urlDb = 'mongodb+srv://yorbi2:PA3Uvecp5SfvAsvU@app-zokn0.mongodb.net/test?retryWrites=true';
}

process.env.URLDB = urlDb;