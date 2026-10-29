import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function NavigationHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathRef = useRef(location.pathname);
  const isFirstRender = useRef(true);

  // Sync on initial React mount so animations and triggers rebind to React DOM
  useEffect(() => {
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event("astro:after-swap"));
      document.dispatchEvent(new Event("astro:page-load"));
      document.body.classList.add("loaded");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Global link interception for SPA client routing
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        link.hasAttribute('download') ||
        link.target === '_blank'
      ) {
        return;
      }

      const targetUrl = new URL(href, window.location.origin);
      if (targetUrl.origin === window.location.origin) {
        e.preventDefault();
        navigate(targetUrl.pathname + targetUrl.search + targetUrl.hash);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [navigate]);

  // Route change synchronization with 3D WebGL engine & GSAP
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    try {
      // 1. Before preparation
      const prepEvent = new Event("astro:before-preparation");
      prepEvent.to = new URL(location.pathname, window.location.origin);
      prepEvent.from = new URL(window.location.href);
      document.dispatchEvent(prepEvent);

      // 2. Before swap
      const swapEvent = new Event("astro:before-swap");
      document.dispatchEvent(swapEvent);

      // 3. After swap (gives React time to render DOM)
      setTimeout(() => {
        const afterSwapEvent = new Event("astro:after-swap");
        document.dispatchEvent(afterSwapEvent);

        const pageLoadEvent = new Event("astro:page-load");
        document.dispatchEvent(pageLoadEvent);

        // Sync footer visibility based on current page
        const main = document.querySelector('main');
        const footer = document.querySelector('#footer');
        if (main && footer) {
          const footerMode = main.getAttribute('data-footer') || 'dark';
          footer.setAttribute('data-theme', footerMode);
        }

        // Scroll to top
        window.scrollTo(0, 0);
      }, 50);
    } catch (err) {
      console.warn("[NavigationHandler] Sync warning:", err);
    }
  }, [location.pathname]);

  return null;
}
