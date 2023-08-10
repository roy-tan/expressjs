var express = require('express');
var router = express.Router();
const axios = require('axios'); // Import the axios library

// Route to handle JSON POST request
router.post('/', async (req, res) => {
  const requestData = JSON.stringify(req.body);
  console.log('Received JSON data:', requestData);
  // You can now process the initial JSON data as needed
  // Define custom headers for the Axios POST request
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json', // Set the content type
      Authorization: 'Bearer YourAccessToken', // Set an authorization header if needed
      // Add any other custom headers as needed
      'x-api-token':'HSwj93HGo0ZPLA1pXOR5q78gRkIKnNNC5h1sAeI4'
    },
  };

  try {
    // Make a JSON POST request to another API
    const response = await axios.post('https://fra1.qualtrics.com/API/v3/directories/POOL_YQsbfLEGgwtoc9j/transactions', requestData, axiosConfig);
    console.log('Response from second POST request:', response.data);

    res.status(200).json({ message: 'JSON data received and processed successfully' });
  } catch (error) {
    console.error('Error making second POST request:', error);
    res.status(500).json({ message: 'Error processing data' });
  }
});


module.exports = router;
