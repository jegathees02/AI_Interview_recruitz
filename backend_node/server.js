const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./router/authRoutes/signup');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURI = "mongodb+srv://recruitz_softflow:recruitz_softflow@recruitzmain.lbunv4c.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
app.use('/',authRoutes);

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');

});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
