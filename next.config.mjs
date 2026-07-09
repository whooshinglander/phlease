/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/tenancy-agreement-singapore', destination: '/lease-agreement', permanent: true },
      { source: '/tenancy-renewal-singapore', destination: '/tenancy-renewal', permanent: true },
      { source: '/stamp-duty-tenancy-renewal-singapore', destination: '/stamp-duty-tenancy-renewal', permanent: true },
      { source: '/rent-increase-tenancy-renewal-singapore', destination: '/rent-increase-tenancy-renewal', permanent: true },
      { source: '/foreign-tenant-renewal-singapore', destination: '/foreign-tenant-renewal', permanent: true },
      { source: '/tenancy-renewal-notice-period-singapore', destination: '/tenancy-renewal-notice-period', permanent: true },
      { source: '/room-rental-renewal-singapore', destination: '/room-rental-renewal', permanent: true },
      { source: '/tenancy-renewal-letter-template-singapore', destination: '/tenancy-renewal-letter-template', permanent: true },
      { source: '/landlord-renewal-vs-find-new-tenant-singapore', destination: '/landlord-renewal-vs-find-new-tenant', permanent: true },
      { source: '/hdb-tenancy-agreement', destination: '/private-property-tenancy-agreement', permanent: true },
      { source: '/hdb-tenancy-renewal-guide', destination: '/tenancy-renewal-guide', permanent: true },
    ]
  },
}
export default nextConfig;
