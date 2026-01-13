import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'person' | 'project' | 'website';
  data: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
    };

    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    switch (type) {
      case 'person':
        structuredData = {
          ...structuredData,
          '@type': 'Person',
          name: 'Jason Franklin',
          jobTitle: 'Frontend Engineer',
          url: origin,
          sameAs: [
            'https://github.com/jfrank325',
            'https://www.linkedin.com/in/jason--franklin',
          ],
          ...data,
        };
        break;
      case 'project':
        structuredData = {
          ...structuredData,
          '@type': 'CreativeWork',
          ...data,
        };
        break;
      case 'website':
        structuredData = {
          ...structuredData,
          '@type': 'WebSite',
          name: 'Jason Franklin - Frontend Engineer Portfolio',
          url: origin,
          ...data,
        };
        break;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `structured-data-${type}`;
    script.text = JSON.stringify(structuredData);

    // Remove existing script if present
    const existingScript = document.getElementById(script.id);
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;

