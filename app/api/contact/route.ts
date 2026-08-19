import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Form verisini oku
    const data = await request.json();

    console.log("CONTACT FORM RECEIVED:", data);

    const {
      name,
      email,
      company,
      phone,
      service,
      machine,
      project,
    } = data;

    // Zorunlu alanları kontrol et
    if (!name || !email || !company || !project) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        {
          status: 400,
        }
      );
    }

    // Resend API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // Resend client
    const resend = new Resend(apiKey);

    // E-mail gönder
    const { error } = await resend.emails.send({
      from: "AENA Technologies <info@aenatechnologies.com>",
      to: ["emrylmz43@gmail.com"],
      replyTo: email,

      subject: `Technical Evaluation Request - ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

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
            ${String(project).replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color:#666;">
            This request was submitted through the
            AENA Technologies website.
          </p>

        </div>
      `,
    });

    // Resend hata döndürdüyse
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Email could not be sent.",
        },
        {
          status: 500,
        }
      );
    }

    // Başarılı
    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
        error: "Unable to process contact form.",
      },
      {
        status: 500,
      }
    );
  }
}