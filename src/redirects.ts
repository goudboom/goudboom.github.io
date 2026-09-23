// Old URLs of the previous site → new URLs. GitHub Pages has no server redirects, so every entry
// becomes a static page with a meta refresh + canonical (see integrations/old-urls.ts).
// GitHub Pages is case-sensitive: /Diensten/ and /diensten/ are different paths.
export const oldUrls: Record<string, string> = {
  '/Home/': '/',
  '/Diensten/': '/diensten/',
  '/Inspiratiebank/': '/inspiratiebank/',
  '/Contact/': '/contact/',
  '/Kennisbank/': '/inspiratiebank/',
  '/Consultancy/': '/diensten/it-iv-consultancy/',
  '/Beheer/': '/diensten/it-iv-consultancy/',
  '/Agile-Lean/': '/diensten/agile-coaching/',
  '/Templates/': '/inspiratiebank/',
  // Renamed or removed inspiration items (their URLs were live, so they keep working).
  '/inspiratiebank/zelf-aan-de-slag/': '/inspiratiebank/juiste-startpunt/',
  '/inspiratiebank/zo-wijs-als-nu/': '/inspiratiebank/acteer/',
  '/inspiratiebank/verbeelding/': '/inspiratiebank/',
};
