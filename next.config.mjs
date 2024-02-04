/** @type {import('next').NextConfig} */
const branchName = process.env.GITHUB_PAGES ? '/timekeepr' : ''
const nextConfig = {
    output: 'export',
    assetPrefix: branchName,
    basePath: branchName,
    reactStrictMode: true,
    trailingSlash: true,
};

export default nextConfig;
