import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_META = {
  '/': {
    title: 'Echelon Interactive Studio | Games, Technology, and Creative Projects',
    description: 'Echelon Interactive Studio creates games, interactive experiences, and technology projects from Invercargill, New Zealand.',
  },
  '/about': {
    title: 'About | Echelon Interactive Studio',
    description: 'Learn about Echelon Interactive Studio, its experience, values, and goals.',
  },
  '/projects': {
    title: 'Projects | Echelon Interactive Studio',
    description: 'Explore games and interactive projects developed by Echelon Interactive Studio.',
  },
  '/fatf': {
    title: 'Fugitive Apprehension Task Force | Echelon Interactive Studio',
    description: 'Discover the gameplay, features, and development of Fugitive Apprehension Task Force.',
  },
  '/contact': {
    title: 'Contact | Echelon Interactive Studio',
    description: 'Contact Echelon Interactive Studio about game development, technology, or collaboration.',
  },
  '/privacy': {
    title: 'Privacy Policy | Echelon Interactive Studio',
    description: 'Read how Echelon Interactive Studio handles contact information, analytics, and advertising data.',
  },
  '/terms': {
    title: 'Terms of Service | Echelon Interactive Studio',
    description: 'Read the terms for using the Echelon Interactive Studio website.',
  },
};

function setMeta(name, content, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function SiteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    const routePath = (basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname) || '/';
    const metadata = PAGE_META[routePath] || {
      title: 'Page Not Found | Echelon Interactive Studio',
      description: 'The requested Echelon Interactive Studio page could not be found.',
    };
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    const canonicalUrl = new URL(pathname, `${siteUrl.replace(/\/$/, '')}/`).toString();

    document.title = metadata.title;
    setMeta('description', metadata.description);
    setMeta('og:title', metadata.title, 'property');
    setMeta('og:description', metadata.description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', metadata.title);
    setMeta('twitter:description', metadata.description);
    setCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}
