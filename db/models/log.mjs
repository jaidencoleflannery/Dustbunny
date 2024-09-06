import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the user and log schema
const userSchema = {
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  logs: { 
    action: {
      type: {
        type: String,
      },
      quantity: {
        type: String,
      },
    },
    date: {
      type: Date,
    },
  }, // will append logs to user ^
}

// Create the model
const user = mongoose.model('user', userSchema);

// Function to add a new log
function addUser(id, name, password) {
  // Create a new log instance
  const currentUser = new user({ 
    _id: {
      type: id,
    },
    username: {
      type: name,
    },
    password: {
      type: password,
    },
  });

  /*
      _id: {
      type: id,
    },
    username: {
      type: name,
    },
    password: {
      type: password,
    },
    logs: {
      action: {
      type: type,
      quantity: quantity,
    },
      date: date,
    }
  });
  */

  return currentUser;
}

  // Save the log instance to the database
  async function saveLog(logInstance) {
    try {
      await logInstance.save();
      console.log('Log saved successfully');
    } catch (err) {
      console.error('Error saving log:', err);
    }
  }

export { add, saveLog };