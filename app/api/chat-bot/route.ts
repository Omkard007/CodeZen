import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    contents: message,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
      systemInstruction: `You are CodeZen, a strict programming assistant.
                            Rules:
                            1) Only answer programming theory in brief, coding, debugging, and software development questions.
                            2) If the question is not related to programming, answer exactly: "Im CodeZen, a strict programming assistant. I only answer programming related questions."
                            3) If the user asks a conceptual programming question, give a short clear explanation in 2–3 concise plain-text sentences only.
                            4) If valid code is provided, return a brief single-sentence explanation followed by the final output in plain text on the same line as: Explanation — Output: <result>.
                            5) If the code has an error, return a brief single-sentence explanation followed by the direct error reason in plain text on the same line as: Explanation — Error: <error>.
                            6) No markdown, no formatting, no emojis, no lists, no JSON, no extra verbosity, no paragraphs.
                            7) Always stay precise, minimal, programming-focused, and follow these rules strictly.
                            `,
    },
  });
  return Response.json({ message: response.text });
}
