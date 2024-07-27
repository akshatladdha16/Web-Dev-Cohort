/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        ppr: 'incremental', //partial prerendiering to accomodate both static and dynamic rendering
    },
};

export default nextConfig;
