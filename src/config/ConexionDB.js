const mongoose = require('mongoose');

const dbName = 'clients_db';
const user = 'administrator';
const pass = 'v2t1D7X3Gj';


/*  configuration set for mongo */
const configuration = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}

//mongodb://administrator:v2t%231%26D7X3Gj@localhost:27017
/* established connection with mongo */
console.log(`mongodb://${user}:${pass}@localhost:27017/${dbName}?authSource=admin`)
mongoose.connect(`mongodb://${user}:${pass}@localhost:27017/${dbName}?authSource=admin`, configuration);
mongoose.connection.once('open', () => (console.log('MongoDB database connection established successfully')))
const db = mongoose.connection;
db.on('error', err => { console.error(`Ocurrion un error ${err}`) });
db.on('reconnected', () => ( onsole.log('MongoDB reconnected!') ));