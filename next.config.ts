import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Incluye el Query Engine de Prisma en el bundle serverless de Vercel.
  serverExternalPackages: ["@prisma/client", "prisma"],
  outputFileTracingIncludes: {
    "/api/*": ["./src/generated/prisma/**/*"],
  },
};

export default nextConfig;
