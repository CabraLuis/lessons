import type { APIRoute } from "astro";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  if (!username) {
    return new Response(JSON.stringify({ message: "undefinedUsername" }));
  }
  if (!password) {
    return new Response(JSON.stringify({ message: "undefinedPassword" }));
  }

  const hashResult = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: username,
      password: hashResult,
    },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "invalidUser" }));
  }

  return new Response(JSON.stringify({ message: "createdUser" }));
};
