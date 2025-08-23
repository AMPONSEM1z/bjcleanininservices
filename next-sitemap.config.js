/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bjcleaningservice.netlify.app",
  generateRobotsTxt: true,
  outDir: "./public", // <--- ensures Netlify serves sitemap & robots.txt
};
