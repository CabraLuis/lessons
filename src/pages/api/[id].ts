import type { APIRoute } from "astro";
import { prisma } from "../lib/prisma";

export const GET: APIRoute = async ({ params, cookies }) => {
  const id = params.id;

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
  const sessionId = cookies.get("sessionId ")!.value;

  const author = await prisma.user.findUnique({
    where: { sessionId: sessionId },
  });

  if (!author) {
    return new Response(
      JSON.stringify({
        message: "invalidUser",
      })
    );
  }

  const lesson = prisma.lesson.findUnique({
    where: { id: id, locationId: locationId, authorId: author.id },
  });

  if (!lesson) {
    return new Response(
      JSON.stringify({
        message: "invalidLesson",
      })
    );
  }
  return new Response(JSON.stringify(lesson));
};

export const DELETE: APIRoute = async ({ params, cookies }) => {
  const id = params.id;

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
  const sessionId = cookies.get("sessionId ")!.value;

  const author = await prisma.user.findUniqueOrThrow({
    where: { sessionId: sessionId },
  });

  const lesson = prisma.lesson.delete({
    where: { id: id, locationId: locationId, authorId: author.id },
  });

  return new Response(JSON.stringify(lesson));
};

//? MAYBE REMOVE PATCH
// export const PATCH: APIRoute = async ({ params, cookies }) => {
//   const id = params.id;

//   if (!cookies.has("locationId")) {
//     return new Response(
//       JSON.stringify({
//         message: "Location not defined!",
//       })
//     );
//   }
//   if (!cookies.has("sessionId")) {
//     return new Response(
//       JSON.stringify({
//         message: "Session not defined!",
//       })
//     );
//   }
//   const locationId = parseInt(cookies.get("locationId")!.value);
//   const sessionId = cookies.get("sessionId ")!.value;

//   const author = await prisma.user.findUniqueOrThrow({
//     where: { sessionId: sessionId },
//   });

//   const lesson = prisma.lesson.update({
//     where: { id: id, locationId: locationId, authorId: author.id },
//     data: {},
//   });
//   return new Response(JSON.stringify(lesson));
// };
