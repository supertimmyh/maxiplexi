/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "MaxiPlexi",
        siteDescription:
            "MaxiPlexi, your innovative marketplace for accessory dwelling units (ADUs), where we blend authentic, pre-approved designs with the latest AI-driven customization and efficient project management. Our platform connects you with a network of vetted contractors, offering competitive bids and tailored solutions to ensure your ADU fits your lifestyle and adds value to your home. With assistance in the permitting process and comprehensive project insights, we make ADU construction seamless, efficient, and financially smart. Choose MaxiPlexi for a streamlined, transparent, and rewarding home expansion journey. Step into the future of personalized, intelligent home expansions with us today!",
        siteKeywords:
            "Accessory Dwelling Units, ADU Construction, Home Expansion, Custom ADUs, ADU Design, AI-Driven Home Design, Efficient Project Management, Home Renovation Marketplace, Sustainable Living Solutions, Contractor Bidding Platform, Residential Property Upgrade, Customizable Home Extensions, Smart Home Additions, ADU Permitting Assistance, Eco-Friendly ADUs, Local Contractor Network, Innovative Housing Solutions, ADU Investment Potential, Home Improvement Technology, Tailored ADU Solutions",
        siteUrl: "You site url",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
