import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("RETROFIT AI API CALLED");

  try {
    const body = await request.json();

    console.log("RECEIVED BODY:", body);

    return NextResponse.json({
      summary: "AENA Retrofit AI API is working.",
      severity: "medium",
      diagnoses: [
        {
          id: "test-001",
          system: body.affectedSystem || "drive",
          fault: "Test diagnosis",
          probability: 80,
          explanation:
            "The Retrofit AI API endpoint is successfully receiving the machine data.",
          evidenceUsed: ["User submitted machine symptom"],
          possibleCauses: [
            "This is a test response.",
          ],
          recommendedChecks: [
            "API connection is working correctly.",
          ],
          recommendedActions: [
            "Continue with the engineering diagnosis engine.",
          ],
          requiredTools: ["Multimeter"],
          safetyWarnings: [
            "Follow electrical safety procedures.",
          ],
        },
      ],
      immediateActions: [
        "Verify that the Retrofit AI API is receiving the request.",
      ],
      furtherQuestions: [
        "What is the exact machine fault?",
      ],
      safetyWarnings: [
        "Isolate electrical power before physical inspection.",
      ],
      confidence: 80,
    });
  } catch (error) {
    console.error("RETROFIT AI API ERROR:", error);

    return NextResponse.json(
      {
        error: "Retrofit AI API error.",
      },
      {
        status: 500,
      }
    );
  }
}