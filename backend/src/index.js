import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//!openai model
// import OpenAI from 'openai';
//!mistral model
const fetch = (await import('node-fetch')).default;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//!openai model
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

app.post('/api/context', async (req, res) => {
    const { jobDescriptionPage } = req.body;

    console.log('/api/context');

    try {
        //!openai model
        // const completion = await openai.chat.completions.create({
        //     model: 'gpt-4o',
        //     messages: [{
        //         role: 'user',
        //         content: `Analyze the page and return parsed data in json format: \
        //         {\
        //             title: "Here must be job title", \
        //             devLanguages: [Here must be list of developing languages used in the job description], \
        //             libraries: [Here must be list of developing libraries used in the job description], \
        //             product: "Here must be description of what product is being developed", \
        //         }\
        //         Data to analyze: ${jobDescriptionPage}`
        //     }],
        //     temperature: 0.5
        // });
        // const result = completion.choices[0].message.content;

        //!mistral model
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "mistral",
                prompt: `
                    You are an expert technical parser.
                    
                    Analyze the following job description page and extract only the data specified below. Return a valid JSON object in this exact structure:
                    
                    {
                      "title": "Job title from the description",
                      "devLanguages": [List of actual programming languages mentioned, like Java, Python, JavaScript, etc.],
                      "technologies": [List of tools, frameworks, platforms, cloud services, databases, etc. used],
                      "product": "Short explanation (1–2 sentences): What product is being built, what problem it solves, and for whom?"
                      "germanReq": "Is german language required for this job? If yes which level? If no just write 'No'"
                    }
                    
                    Important rules:
                    - Do NOT include any other keys or fields
                    - Make sure devLanguages only contains programming languages (no tools or frameworks)
                    - Make sure technologies only contains non-language tools (frameworks, platforms, databases, etc.)
                    - If a value is not present, use an empty string or empty array.
                    
                    Analyze this data:
                    ${jobDescriptionPage}
                    `,
                stream: false
            })
        });

        const data = await response.json();

        console.log('data', data);

        res.json({ result: data.response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to evaluate' });
    }
});

// app.post('/api/evaluate', async (req, res) => {
//     const { resume, jobDescription } = req.body;
//
//     try {
//         const completion = await openai.chat.completions.create({
//             model: 'gpt-4',
//             messages: [{
//                 role: 'user',
//                 content: `Evaluate how well this resume matches this job description. Return:
// 1. Matched skills
// 2. Missing skills
// 3. Unicorn Score (0–100)
// 4. Suggestions for improvement
//
// Resume:
// ${resume}
//
// Job Description:
// ${jobDescription}`
//             }],
//             temperature: 0.5
//         });
//
//         const result = completion.choices[0].message.content;
//         res.json({ result });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to evaluate' });
//     }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
