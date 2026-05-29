export async function POST(request) {
  try {
    const { systemPrompt, messages } = await request.json();

    // Build messages in OpenAI format (Groq is OpenAI-compatible)
    const groqMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map(m => ({ role: m.role, content: m.content || m.text || "" }))
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        messages: groqMessages,
      }),
    });

    const data = await response.json();

    if (data?.choices?.[0]?.message?.content) {
      return Response.json({ text: data.choices[0].message.content });
    }

    return Response.json(
      { error: data?.error?.message || "No response from Groq" },
      { status: 500 }
    );
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
