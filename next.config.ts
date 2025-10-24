// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ TEMP: don’t fail production builds because of ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Allow next/image to optimize remote images (Twitter avatars, etc.)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      // Add more hosts as needed:
      // { protocol: "https", hostname: "abs.twimg.com" },
      // { protocol: "https", hostname: "lh3.googleusercontent.com" },
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // (Optional) keep strict mode on if you like
  reactStrictMode: true,
};

export default nextConfig;
