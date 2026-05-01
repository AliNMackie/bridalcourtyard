import { MetadataRoute } from 'next';
import DESIGNERS_DATA from '@/data/content/designers.json';

const DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bridalcourtyard.com';

  const staticRoutes = [
    '',
    '/our-boutique',
    '/designers',
    '/accessories',
    '/your-views',
    '/faq',
    '/contact',
    '/privacy-and-cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const designerRoutes = DESIGNERS.map((designer: any) => ({
    url: `${baseUrl}/${designer.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...designerRoutes];
}
