const axios = require('axios');
exports.askGemini = async (req, res) => {
  const { message } = req.body;

  try {
    const result = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        contents: [{ parts: [{ text: message }] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': process.env.GEMINI_API_KEY,
        },
      }
    );
    const reply =
      result.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Gemini Request failed' });
  }
};
