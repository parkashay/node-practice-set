const express = require('express');
const multer = require('multer');
const app = express();

// Configure multer to store uploaded files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Serve the HTML form to upload an image
app.get('/', (req, res) => {
    res.send(`
    <form method="POST" action="/" enctype="multipart/form-data">
      <input type="file" name="image" />
      <button type="submit">Upload</button>
    </form>
  `);
});

// Handle the image upload and conversion to binary string
app.post('/', upload.single('image'), (req, res) => {
    // Get the image data from the request body
    const image = req.file;

    // Convert the image data to a binary string
    const base64String = Buffer.from(image.buffer).toString('base64');
    console.log(base64String)
    // Send the binary string back to the client
    res.send(`The binary string is: 
  <div style="background-color:red; padding:20px; font-size:0.5em;">${base64String}</div>  `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});