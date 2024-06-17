const app = require('./app'); // Ensure this path points to your app file
require('dotenv').config();

app.get('/', async (req, res) => {

    
    res.status(200).json({
      message: 'Hello World',
    });
  });



  const PORT = process.env.NODE_DOCKER_PORT || 4000;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
  });
  