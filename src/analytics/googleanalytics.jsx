export const sendPageView = (url) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_location: url,
    });
  }
};

export const sendEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};
