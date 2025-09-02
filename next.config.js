/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },    // needed for static export
  // IMPORTANT for custom domain: no basePath / assetPrefix here
};

