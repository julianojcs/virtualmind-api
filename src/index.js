const express = require('express');
const cors = require('cors');
const server = express();
const ExercisesRoutes = require('./routes/ExerciseRoutes');

server.use(cors());
server.use(express.json());
server.use('/', ExercisesRoutes);

server.listen(process.env.PORT || 3333, () => {
  console.log('API ONLINE')
})