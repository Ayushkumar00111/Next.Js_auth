/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  redirects:async()=>{
    return[{
      source:"/loder",
      destination:"api",
      permanent:false
    }]
  }
};

export default nextConfig;
