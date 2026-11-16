import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_META = {
  '/': {
    title: 'Echelon Studio | Games, Technology, and Creative Projects',
    description: 'Echelon Studio creates games, interactive experiences, and technology projects from Invercargill, New Zealand.',
  },
  '/about': {
    title: 'About | Echelon Studio',
    description: 'Learn about Echelon Studio, its experience, values, and goals.',
  },
  '/projects': {
    title: 'Projects | Echelon Studio',
    description: 'Explore games and interactive projects developed by Echelon Studio.',
  },
  '/fatf': {
    title: 'Fugitive Apprehension Task Force | Echelon Studio',
    description: 'Discover the gameplay, features, and development of Fugitive Apprehension Task Force.',
  },
  '/contact': {
    title: 'Contact | Echelon Studio',
    description: 'Contact Echelon Studio about game development, technology, or collaboration.',
  },
  '/privacy': {
    title: 'Privacy Policy | Echelon Studio Limited',
    description: 'Read how Echelon Studio Limited handles contact information, analytics, and advertising data.',
  },
  '/terms': {
    title: 'Terms of Service | Echelon Studio Limited',
    description: 'Read the terms for using the Echelon Studio website.',
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
      title: 'Page Not Found | Echelon Studio',
      description: 'The requested Echelon Studio page could not be found.',
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
