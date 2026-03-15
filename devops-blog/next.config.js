const path = require('path');

module.exports = {
    reactStrictMode: true,
    output: 'standalone',
    turbopack: {
        root: path.join(__dirname),
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'example.com',
        }, ], // Add your allowed remote image hosts here
    },
    env: {
        CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Example of adding environment variables
    },
};