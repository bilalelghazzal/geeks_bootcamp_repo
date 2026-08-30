const mongoose = require('mongoose');

// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));

  const mongoose = require('mongoose');

//shema Definition : 
  const taskSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: [true, "You must provide a task title"] 
    },

    description: String,
    status: { 
      type: String, 
      enum: ['pending', 'completed'], 
      default: 'pending' 
    },

    createdAt: { 
      type: Date, 
      default: Date.now 
    }

  });
  

const Task=mongoose.model('Task',taskSchema);

// The Test Function to test the validation
const createTask = async () => {
    try {
      const newTask = await Task.create({
        title: "Learn Mongoose Validation",
        description: "Complete the daily challenge for the MongoDB bootcamp"
      });
      console.log("✅ Task Created:", newTask);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
  };
  

const getAllTasks = async () => {
    const tasks = await Task.find();
    console.log("📋 Current Tasks:", tasks);
  };

  const completeTask = async (taskId) => {
    await Task.findByIdAndUpdate(taskId, { status: 'completed' });
    console.log("🚀 Task marked as completed!");
  };

const runchallenge=async () => {
    console.log("starting challenge ....");
    //test 1
    console.log("Test 1: Attempting to save a task without a title...");
    await createTask({ description: "This should fail!" });
    //test 2
    await createTask({ description: "This should fail!" ,status:"in-progress"});
    //test 3
    await createTask({ 
        title: "Complete Mongoose Module", 
        description: "Successfully implemented validation!" 
      });
    getAllTasks();
}



  

  