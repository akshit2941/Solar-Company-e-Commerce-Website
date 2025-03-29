const nextConfig = {
  output: "export", // Ensures a static export
  images: {
    unoptimized: true, // Disables Next.js image optimization (use external CDNs)
  },
};

export default nextConfig;
