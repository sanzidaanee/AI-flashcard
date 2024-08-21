import { NextResponse } from "next/server";
import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// const openaiApiKey = process.env.OPENROUTER_API_KEY;







const openai = new OpenAI({
   baseURL: "https://openrouter.ai/api/v1",
apiKey: process.env.OPENROUTER_API_KEY,

});

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
"flashcards":[
  {
    "front": "Front of the card",
    "back": "Back of the card"
  }
]
}
`
export async function POST(req) {
  const openai = new OpenAI()
  const data = await req.text()

  const completion = await openai.chat.completions.create({
    
    messages: [
      { role: "user", content: "data" }
    ],
    model: "openai/gpt-3.5-turbo",
    response_format: { type: 'json_object' },
  })

  console.log(completion.choices[0].message)

  

   // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.choices[0].message.content)
   // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards)

}


 

  







