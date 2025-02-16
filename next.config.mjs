/** @type {import('next').NextConfig} */
const nextConfig = {async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  output: 'export',
};

export default nextConfig;
