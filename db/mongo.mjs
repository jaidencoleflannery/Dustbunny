// setup mongodb dependencies (using mongoose)
import mongoose from 'mongoose';

//connect to the database (duh)
async function connect(){
    try{
        await mongoose.connect('url'); // < hidden
        console.log("Successfully Connected to MongoDB");
    }
    catch(error){
        console.log("Error: Unable To Connect To Database");
    }
}

export { connect};