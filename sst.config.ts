/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'sst-template',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        cloudflare: '5.49.0',
      },
    };
  },
  async run() {
    await import('./app/infra/api');
    await import('./app/infra/frontend');
  },
});
