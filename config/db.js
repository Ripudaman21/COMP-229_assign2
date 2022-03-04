// For production environment never expose your connection string.
//let URI = "mongodb+srv://dbadmin:J63Akwkj30Z75fm8@clusters003.amfry.mongodb.net/mydb?retryWrites=true&w=majority"

let URI ="mongodb+srv://dbadmin:Ripudaman%40121@cluster0.z9efi.mongodb.net/mydb?retryWrites=true&w=majority"

//Database setup
let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the Database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
   
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDB;
}