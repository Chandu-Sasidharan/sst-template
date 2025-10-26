export const frontend = new sst.aws.Nextjs('Frontend', {
  path: 'app/packages/frontend',
  // Uncomment to set up a custom domain
  // domain: {
  //   name: 'yourdomain.com',
  //   redirects: ['www.yourdomain.com'],
  //   dns: sst.cloudflare.dns(),
  // },
});
