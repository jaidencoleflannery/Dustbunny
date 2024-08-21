import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the log schema
const logSchema = new Schema({
  action: {
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    required: true,
  },
});

// Create the model
const Log = mongoose.model('Log', logSchema);

// Function to add a new log
function add(type, quantity, date) {
  // Create a new log instance
  const logInstance = new Log({ 
    action: {
      type: type,
      quantity: quantity,
    },
    date: date,
  });

  return logInstance;
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