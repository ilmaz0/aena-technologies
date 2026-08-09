import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      company,
      phone,
      service,
      machine,
      project,
    } = data;

    if (!name || !email || !company || !project) {
      return Response.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        { status: 400 }
      );
    }

    // Resend API key'i sadece API isteği geldiğinde oku
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "AENA Technologies <info@aenatechnologies.com>",
      to: ["emrylmz43@gmail.com"],
      replyTo: email,
      subject: `Technical Evaluation Request - ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2 style="color:#f97316;">
            AENA Technologies
          </h2>

          <h3>
            Technical Evaluation Request
          </h3>

          <hr />

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Company:</strong><br />
            ${company}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Phone / WhatsApp:</strong><br />
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Service Required:</strong><br />
            ${service || "Not specified"}
          </p>

          <p>
            <strong>Machine Type / Model:</strong><br />
            ${machine || "Not provided"}
          </p>

          <p>
            <strong>Project Description:</strong>
          </p>

          <p>
            ${project.replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color:#666;">
            This request was submitted through the
            AENA Technologies website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Email could not be sent.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Request sent successfully.",
    });

  } catch (error) {
    console.error("API error:", error);

    return Response.json(
      {
        success: false,
        message: "Server error.",
      },
      { status: 500 }
    );
  }
}