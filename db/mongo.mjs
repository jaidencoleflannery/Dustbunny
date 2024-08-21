// setup mongoose for mongodb
import mongoose from 'mongoose';

//connect to the database
async function connect(){
    try{
        await mongoose.connect('insert url');
        console.log("Success: Connected to database. ");
    }
    catch(error){
        console.log("Error: Unable to connect to database. ");
    }
}

export { connect};
