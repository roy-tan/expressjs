var express = require('express');
var router = express.Router();
const axios = require('axios'); // Import the axios library

// Route to handle JSON POST request
app.post('/', async (req, res) => {
  const requestData = req.body;
  console.log('Received JSON data:', requestData);
  // You can now process the initial JSON data as needed

  try {
    // Make a JSON POST request to another API
    const response = await axios.post('https://fra1.qualtrics.com/API/v3/directories/POOL_YQsbfLEGgwtoc9j/transactions', requestData);
    console.log('Response from second POST request:', response.data);

    res.status(200).json({ message: 'JSON data received and processed successfully' });
  } catch (error) {
    console.error('Error making second POST request:', error);
    res.status(500).json({ message: 'Error processing data' });
  }
});


module.exports = router;
