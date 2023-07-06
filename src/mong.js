const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('Failed to connect:', err);
  });

  const loginSchema = new mongoose.Schema({
  name: {
    type: String,
   
    
  },
  contactNumber: {
    type: Number,
   
  },
  MailId: {
    type: String,
    
    
  },
  BookingDate: {
    type: String,
    
  }
});

const collection = mongoose.model("collection1", loginSchema);

module.exports = collection;

