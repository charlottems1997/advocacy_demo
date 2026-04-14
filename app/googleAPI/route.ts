import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { Bill } from "@/types/legislation";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const schema = {
  type: SchemaType.OBJECT,
  properties: {
    filteredBills: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        properties: {
          number: {
            type: SchemaType.STRING,
            description: "The unique ID or number of the bill",
          },
        },
        required: ["number"],
      },
    },
  },
  required: ["filteredBills"],
};

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API configuration missing." },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { bills, userTopic }: { bills: Bill[]; userTopic: string } = body;

    if (!bills || !userTopic) {
      return NextResponse.json(
        { error: "Missing bills or userTopic." },
        { status: 400 },
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.1,
      },
    });

    const billData = bills.map((b) => ({ title: b.title, number: b.number }));

    const prompt = `
      Review these bills: ${JSON.stringify(billData)}
      User Interest: "AI Regulation"
      Determine which bills are most relevant to the user's interest.
      Then, return the entire list of bills back to me
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log(JSON.stringify(text));

    return NextResponse.json(text);
  } catch (error) {
    console.error("Gemini Route Error:", error);
    return NextResponse.json(
      { error: "Failed to process request with AI." },
      { status: 500 },
    );
  }
}
