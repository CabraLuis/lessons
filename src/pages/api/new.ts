import type { APIRoute } from "astro";
import { prisma } from "../lib/prisma";

export const POST: APIRoute = async ({ request, cookies }) => {
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

  const data = await request.formData();
  const createdAt = data.get("createdAt") as string;
  const summary = data.get("summary") as string;
  const project = data.get("project") as string;
  const area = data.get("area") as string;
  const manager = data.get("manager") as string;
  const members = data.get("members") as string;
  const wentWrong = data.get("wentWrong") as string;
  const solution = data.get("solution") as string;
  const lessonLearned = data.get("lessonLearned") as string;
  const comments = data.get("comments") as string;
  const accessIDtype = data.get("accessIDtype") as string;
  const accessID = data.get("accessID") as string;

  const lessonCount = await prisma.lesson.count({ where: { area: area } });
  const id = `${area.substring(0, 3).toUpperCase()}${lessonCount + 1}`;

  if (!data) {
    return new Response(
      JSON.stringify({
        message: "missingData",
      }),
      { status: 400 }
    );
  }

  const lesson = prisma.lesson.create({
    data: {
      id: id,
      createdAt: createdAt,
      summary: summary,
      project: project,
      area: area,
      manager: manager,
      members: members,
      wentWrong: wentWrong,
      solution: solution,
      lessonLearned: lessonLearned,
      comments: comments,
      accessIDtype: accessIDtype,
      accessID: accessID,
      authorId: author.id,
      locationId: locationId,
    },
  });

  return new Response(JSON.stringify(lesson));
};
