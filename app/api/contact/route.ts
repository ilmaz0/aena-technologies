import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("CONTACT FORM RECEIVED:", body);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process contact form.",
      },
      {
        status: 500,
      }
    );
  }
}