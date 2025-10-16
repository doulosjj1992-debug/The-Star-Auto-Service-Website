// public/gbp/gbp-events.js
(function () {
  function bindGbpEvents() {
    const track = (name, params) => window.gtag && gtag('event', name, params);
    const el = (id) => document.getElementById(id);

    const map = {
      'cta-directions': 'gbp_directions_click',
      'cta-review': 'gbp_review_write_click',
      'cta-view-reviews': 'gbp_reviews_view_click'
    };

    Object.entries(map).forEach(([id, evt]) => {
      const a = el(id);
      if (a) a.addEventListener('click', () => track(evt, { link_url: a.href }));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindGbpEvents);
  } else {
    bindGbpEvents();
  }
})();
