const studentSchema = new mongoose.Schema({
    name: String,
    updatedAt: Date
  });
  
  // The Pre-Save Hook
  studentSchema.pre('save', function(next) {
    this.updatedAt = Date.now(); // 'this' refers to the student document
    next(); // Move to the save operation
  });
  
  const Student = mongoose.model('Student', studentSchema);
  