import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  preset: 'cloudflare-module',
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': '*',
        'access-control-allow-headers': '*',
      },
    },
  },
});
