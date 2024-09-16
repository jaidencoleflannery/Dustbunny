// setup mongoose for mongodb
import mongoose from 'mongoose';

//connect to the database
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://jaidencoleflannery:<db_password>@cluster0.w5ibhig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Success: Connected to database. ");
    }
    catch(error){
        console.log("Error: Unable to connect to database. ");
    }
}

export { connect};
