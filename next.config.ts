import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "madasky.trivexait.com",
      pathname: "/public/uploads/**",
    },
  ],
},

  // remotePatterns: [
  //   {
  //     protocol: "http",
  //     hostname: "192.168.0.116",
  //     port: "", // Add port if needed, e.g., "3000"
  //     pathname: "/public/uploads/webimage/**",
  //   },
  // ],



  async redirects() {
    return [
      {
        source: '/project-factory-technical-design',
        destination: '/factory-technical-design-consulting',
        permanent: true,
      },
      {
        source: '/warehousing-solutions',
        destination: '/warehousing-solutions-consulting',
        permanent: true,
      },
      {
        source: '/sustainability',
        destination: '/sustainability-consulting',
        permanent: true,
      },
      {
        source: '/construction',
        destination: '/construction-consulting',
        permanent: true,
      },
      {
        source: '/supply-chain-management',
        destination: '/supply-chain-management-consulting',
        permanent: true,
      },
      {
        source: '/financial-services',
        destination: '/finacial-services-consulting',
        permanent: true,
      },
      {
        source: '/business-strategy',
        destination: '/business-strategy-consulting',
        permanent: true,
      },
      {
        source: '/msme-growx',
        destination: '/msme-growx-consulting',
        permanent: true,
      },
      {
        source: '/operations-excellence',
        destination: '/operations-excellence-consulting',
        permanent: true,
      },
      {
        source: '/people-and-organisational-performance',
        destination: '/people-and-organisational-performance-consulting',
        permanent: true,
      },
      {
        source: '/advisory',
        destination: '/advisory-consulting',
        permanent: true,
      },
      {
        source: '/growth-marketing-and-sales',
        destination: '/growth-marketing-consulting',
        permanent: true,
      },
      {
        source: '/financial-strategy',
        destination: '/financial-strategy-consulting',
        permanent: true,
      },
      {
        source: '/consumer-products',
        destination: '/consumer-products-consulting',
        permanent: true,
      },
      {
        source: '/automation-in-manufacturing',
        destination: '/automation-in-manufacturing-consulting',
        permanent: true,
      },
      {
        source: '/e-commerce',
        destination: '/e-commerce-consulting',
        permanent: true,
      },
      {
        source: '/cost-transformation',
        destination: '/cost-transformation-consulting',
        permanent: true,
      },
      {
        source: '/performance-transformation',
        destination: '/performance-transformation-consulting',
        permanent: true,
      },
      {
        source: '/working-capital-optimisation',
        destination: '/working-capital-optimisation-consulting',
        permanent: true,
      },
      {
        source: '/rapid-cash-generation',
        destination: '/rapid-cash-generation-consulting',
        permanent: true,
      },
   
      {
        source: '/plant-layout',
        destination: '/plant-layout-consulting',
        permanent: true,
      },
      {
        source: '/process-and-material-flow',
        destination: '/process-and-material-flow-consulting',
        permanent: true,
      },
      {
        source: '/manpower-planning',
        destination: '/manpower-planning-consulting',
        permanent: true,
      },
      {
        source: '/people-skilling',
        destination: '/people-skilling-consulting',
        permanent: true,
      },
      {
        source: '/talent-acquisition',
        destination: '/talent-acquisition-consulting',
        permanent: true,
      },
      
     
      
    
      
    ];
  },

};

export default nextConfig;
