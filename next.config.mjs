/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ik.imagekit.io", "placehold.co"],
  },

  env: {
    SITE_SLUG: "sahil-kalkal-1764790919178",  // <- IMPORTANT LINE
  },
};

export default nextConfig;
