const mongoose = require('mongoose');

// The Connection Handshake
mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));

// The Schema Definition
const studentSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: [true, 'Name is mandatory'] 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    age: { 
      type: Number, 
      min: [18, 'Students must be at least 18 years old'] 
    }
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  // The Test Function to test the validation
  const testStudent = async () => {
    try {
      const student = new Student({
        name: "Omar",
        email: "omar@school.com",
        age: 16 // This should trigger an error!
      });
      await student.save();
    } catch (error) {
      console.log("Validation Error Caught:", error.message);
    }
  };
  
  testStudent();
// result validation error age student must be at least 18 