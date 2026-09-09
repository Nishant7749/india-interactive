const { GoogleGenAI } = require('@google/genai')

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

const aiResponse = async (req, res) => {
    try {
        const { msg } = req.body;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",

            contents: `You are Saathi, an AI assistant for an interactive
India State Information website.

Your main purpose is to answer questions about:

- Indian states
- Capitals
- Population
- Area
- Districts
- Geography
- Culture
- Tourism
- Languages
- State comparisons

Keep answers concise and easy to understand.

User Question:
${msg}

      `
        })


        res.json({
            reply: response.text
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = aiResponse