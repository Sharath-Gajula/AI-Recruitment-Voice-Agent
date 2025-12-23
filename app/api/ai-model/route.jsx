import { QUESTIONS_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  
    const {jobPosition,jobDescription,interviewDuration,type} = await req.json();

    const prompt = QUESTIONS_PROMPT
    .replace('{{jobTitle}}', jobPosition)
    .replace('{{jobDescription}}', jobDescription)
    .replace('{{duration}}', interviewDuration)
    .replace('{{type}}', type);
    console.log(prompt);

    try{
        const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY,
    })
    const completion = await openai.chat.completions.create({
      model: "google/gemma-3-12b-it:free",
      messages: [
        { role: "user", content: prompt }
      ],

    })
    // console.log(completion.choices[0].message)
    return NextResponse.json(completion.choices[0].message);
   }
   catch(e){
    console.log(e);
    return NextResponse.json(e);
   }
}