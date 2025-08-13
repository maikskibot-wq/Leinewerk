const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.message;
  const apiKey = process.env.OPENAI_API_KEY; // Niemals im Frontend!
  const result = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role:"user",content:prompt}]
    })
  });
  const json = await result.json();
  res.json({reply: json.choices[0].message.content});
});

app.listen(3000, ()=>console.log('Server läuft auf 3000'));