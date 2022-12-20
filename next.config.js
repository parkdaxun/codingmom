/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return[
      {
        source: "/user",
        destination: "http://localhost:2020/user"
      }
    ]
  }
}

module.exports = nextConfig
