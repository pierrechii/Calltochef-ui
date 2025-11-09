import { NextResponse } from "next/server"

const WEBHOOK_URL =
  process.env.N8N_CHAT_WEBHOOK_URL ??
  "https://n8n.calltochef.fr/webhook/chatbot"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    const responseText = await webhookResponse.text()

    let parsedResponse: unknown
    try {
      parsedResponse = JSON.parse(responseText)
    } catch {
      parsedResponse = responseText
    }

    const responseBody =
      typeof parsedResponse === "string"
        ? { output: parsedResponse }
        : parsedResponse

    const normalizedBody = Array.isArray(responseBody)
      ? responseBody.map((entry) =>
          entry && typeof entry === "object" && "output" in entry
            ? entry
            : { ...(entry as Record<string, unknown>), output: (entry as { output?: string; error?: string })?.output ?? (entry as { error?: string })?.error ?? "" },
        )
      : {
          ...(responseBody as Record<string, unknown>),
          output:
            (responseBody as { output?: string; error?: string }).output ??
            (responseBody as { error?: string }).error ??
            "",
        }

    return NextResponse.json(normalizedBody, {
      status: webhookResponse.ok ? 200 : webhookResponse.status,
      headers: corsHeaders,
    })
  } catch (error) {
    console.error("[Chat API] Failed to forward request", error)
    return NextResponse.json(
      { error: "Le service de chat est momentanément indisponible.", output: "Le service de chat est momentanément indisponible." },
      {
        status: 502,
        headers: corsHeaders,
      },
    )
  }
}


