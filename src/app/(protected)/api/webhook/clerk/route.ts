import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/lib/aws/ses";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

async function validateRequest(request: Request) {
  const payloadString = await request.text();
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };

  const wh = new Webhook(webhookSecret);
  return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}

export async function POST(request: Request) {
  try {
    const payload = await validateRequest(request);
    console.log("Webhook event received:", payload);

    if (payload.type === "user.created") {
      const { email_addresses, first_name } = payload.data;
      const email = email_addresses[0]?.email_address;

      if (!email)
        return Response.json({ error: "Email not found" }, { status: 400 });

      const params = {
        Destination: { ToAddresses: [email] },
        Source: "virendrasonivs07@gmail.com", // Must be a verified email in AWS SES
        Message: {
          Subject: { Data: "Welcome to Our Platform!" },
          Body: {
            Html: {
              Data: `<h1>Welcome, ${
                first_name || "User"
              }!</h1><p>Thank you for signing up!</p>`,
            },
          },
        },
      };

      await sesClient.send(new SendEmailCommand(params));
      return Response.json({ success: true, message: "Welcome Email sent" });
    }

    return Response.json({ message: "Event not handled" }, { status: 200 });
  } catch (error) {
    console.error("Webhook Failed", error);
    return Response.json({ error: "Webhook failed" }, { status: 400 });
  }
}
