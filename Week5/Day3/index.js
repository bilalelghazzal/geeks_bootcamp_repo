const mongoose = require('mongoose');

// we suppose we create models user , product in separate file  bcs this is small example we will use all in 

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: {type : String , select :false}
});

const User= mongoose.model('Product',userSchema);

const productSchema = new mongoose.Schema({
    name:{type :String, required: true},
    price:{type :float, required : true},
})

const Product = mongoose.model('Product',productSchema);


const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    items: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      price: Number
    }],
    totalAmount: Number,
    status: { type: String, default: 'pending' }
  }, { timestamps: true });
  

  //Task A : 
  
  // Add this to your Product Model file
productSchema.index({ category: 1, price: -1 });



