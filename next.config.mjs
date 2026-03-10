/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/styleguide/:path*',
          destination: '/styleguide/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
