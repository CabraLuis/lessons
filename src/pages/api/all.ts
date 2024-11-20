import type { APIRoute } from "astro";
import { prisma } from "../lib/prisma";

export const GET: APIRoute = async ({ params, request, cookies }) => {
  if (!cookies.has("locationId")) {
    return new Response(
      JSON.stringify({
        message: "undefinedLocation",
      })
    );
  }

  if (!cookies.has("sessionId")) {
    return new Response(
      JSON.stringify({
        message: "undefinedSession",
      })
    );
  }

  const locationId = cookies.get("locationId")!.value;
  const lessons = prisma.lesson.findMany({ where: { locationId: locationId } });

  if (!lessons) {
    return new Response(
      JSON.stringify({
        message: "invalidLessons",
      })
    );
  }

  return new Response(
    JSON.stringify({
      lessons,
    })
  );
};
