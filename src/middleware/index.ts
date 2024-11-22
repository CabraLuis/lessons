import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  //TODO: Implement middleware for protected routes
  return next();
});
