// pages/admin/_middleware.js
export { default } from "next-auth/middleware";

/** Define here what route should be protected by authentication */
export const config = {
  matcher: "/dashboard/:path*",
  "/setupCafe/:path*": true,
};
