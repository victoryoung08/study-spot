// lib/gtm.ts
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};

// create push data layer button click
export const pushDataLayer = (data: Record<string, any>) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "buttonClick",
      name: data?.name,
      path: data?.path,
      ...data,
    });
  }
};
