import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap {const base='https://nilxavqero.quest';return ['','/gra','/jak-grac','/o-grze','/kontakt','/polityka-prywatnosci','/regulamin'].map(path=>({url:base+path,lastModified:new Date('2026-10-08'),changeFrequency:path==='/gra'?'weekly':'monthly',priority:path===''?1:path==='/gra'?0.9:0.5}));}
