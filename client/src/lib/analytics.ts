// Google Analytics 4 implementation for TRANSERVICA
// This file handles all analytics tracking including language usage

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Initialize Google Analytics 4
export function initializeAnalytics(measurementId: string) {
  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
}

// Track language changes
export function trackLanguageChange(language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'language_change', {
      event_category: 'User Preference',
      event_label: language,
      value: language === 'es' ? 1 : 2
    });
  }
}

// Track page views with language
export function trackPageView(page: string, language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: page,
      page_language: language
    });
  }
}

// Track quote requests
export function trackQuoteRequest(language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'quote_request', {
      event_category: 'Lead Generation',
      event_label: language,
      value: 1
    });
  }
}

// Track contact form submissions
export function trackContactForm(language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'Lead Generation',
      event_label: language,
      value: 1
    });
  }
}

// Track equipment interest
export function trackEquipmentInterest(equipmentName: string, language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'equipment_interest', {
      event_category: 'User Interest',
      event_label: equipmentName,
      equipment_language: language
    });
  }
}

// Track blog article views
export function trackBlogView(articleTitle: string, language: 'es' | 'en') {
  if (window.gtag) {
    window.gtag('event', 'blog_article_view', {
      event_category: 'Content Engagement',
      event_label: articleTitle,
      content_language: language
    });
  }
}
