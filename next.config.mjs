import { createJiti } from 'jiti';
import { fileURLToPath } from 'url';
const jiti = createJiti(fileURLToPath(import.meta.url));

// importing env to validate
jiti('./src/env/server.ts');
jiti('./src/env/client.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
