// next.config.ts
import type { NextConfig } from 'next'

const csp = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ajax.googleapis.com https://maps.googleapis.com;",
  "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ajax.googleapis.com https://maps.googleapis.com;",
  "script-src-attr 'self' 'unsafe-inline';",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net;",
  "img-src 'self' data: blob: https://www.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com;",
  "font-src 'self' data: https://fonts.gstatic.com https://use.typekit.net;",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://maps.googleapis.com https://maps.gstatic.com https://p.typekit.net https://use.typekit.net;",
  "frame-src 'self' https://www.google.com https://www.googletagmanager.com;",
  "base-uri 'self';",
  "form-action 'self';",
  "upgrade-insecure-requests;"
].join(' ')

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
        ]
      }
    ]
  }
}

export default nextConfig
