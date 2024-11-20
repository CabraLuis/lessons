import type { APIRoute } from "astro";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

export const POST: APIRoute = async ({ request, cookies }) => {
  const data = await request.formData();
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  if (!username) {
    return new Response(JSON.stringify({ message: "undefinedUser" }));
  }
  if (!password) {
    return new Response(JSON.stringify({ message: "undefinedPassword" }));
  }

  const user = await prisma.user.findUnique({
    where: { name: username },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "invalidUser" }));
  }

  const result = await bcrypt.compare(password, user.password);

  if (result) {
    const uuid = crypto.randomUUID();
    await prisma.user.update({
      where: { name: username },
      data: {
        sessionId: uuid,
      },
    });
    cookies.set("sessionId", uuid, {
      maxAge: 604800,
      sameSite: "strict",
      path: "/",
    });

    return new Response(JSON.stringify({ message: "logIn" }));
  }
  return new Response(JSON.stringify({ message: "error" }));
};
