import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const MetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateNameTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (title) {
      document.title = title;
      updateNameTag('title', title);
      updateMetaTag('og:title', title);
      updateMetaTag('twitter:title', title);
    }

    if (description) {
      updateNameTag('description', description);
      updateMetaTag('og:description', description);
      updateMetaTag('twitter:description', description);
    }

    if (image) {
      updateMetaTag('og:image', image);
      updateMetaTag('twitter:image', image);
    }

    if (url) {
      updateMetaTag('og:url', url);
      updateMetaTag('twitter:url', url);
    }
  }, [title, description, image, url]);

  return null;
};

export default MetaTags;

