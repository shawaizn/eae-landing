import { useEffect } from 'react';

export function useExternalScript(src) {
  useEffect(() => {
    if (!src) return undefined;

    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return undefined;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [src]);
}
