const express = require('express');
const cors = require('cors');
const mockResponses = require('./mockResponses');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/generate', (req, res) => {
  const { targetAudience, topic } = req.body;
  
  // Simulate AI processing delay
  setTimeout(() => {
    // In a real implementation, you would call an AI API here
    const response = mockResponses.find(r => 
      r.inputs.targetAudience.toLowerCase() === targetAudience.toLowerCase() && 
      r.inputs.topic.toLowerCase() === topic.toLowerCase()
    );
    
    if (response) {
      res.json(response.output);
    } else {
      // Fallback to first mock response
      res.json(mockResponses[0].output);
    }
  }, 1500);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});