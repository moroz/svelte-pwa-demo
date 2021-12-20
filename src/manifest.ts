import type { ManifestOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "Sample PWA",
  short_name: "PWA",
  description: "A sample PWA built with Vite",
  theme_color: "#0e7fff",
  icons: [
    {
      src: "pwa-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
};

export default manifest;
