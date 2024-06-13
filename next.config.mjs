import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "https://portfolio-backend-one-zeta.vercel.app"
  }
};

export default nextConfig;
