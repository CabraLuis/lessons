import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const data = await request.json();
  const locationId = data.value;
  cookies.set("locationId", locationId, { sameSite: "strict", path: "/" });

  return new Response(JSON.stringify({ message: "selectedWorkplace" }));
};
