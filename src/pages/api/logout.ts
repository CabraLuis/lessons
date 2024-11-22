import type { APIRoute } from "astro";
import { prisma } from "../lib/prisma";

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!cookies.has("sessionId")) {
    return new Response(
      JSON.stringify({
        message: "undefinedSession",
      })
    );
  }
  const sessionId = cookies.get("sessionId ")!.value;

  const user = await prisma.user.update({
    where: { sessionId: sessionId },
    data: { sessionId: null },
  });

  cookies.delete("sessionId");

  if (!user) {
    return new Response(JSON.stringify({ message: "invalidUser" }));
  }

  return new Response(JSON.stringify({ message: "logOut" }));
};
