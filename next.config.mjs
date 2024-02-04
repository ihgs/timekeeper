/** @type {import('next').NextConfig} */
const branchName = process.env.GITHUB_PAGES ? '/timekeeper' : ''
const nextConfig = {
    output: 'export',
    assetPrefix: branchName,
    basePath: branchName,
    env: {
        NEXT_PUBLIC_BASEPATH: branchName
    },
    reactStrictMode: true,
    trailingSlash: true,
};

export default nextConfig;
