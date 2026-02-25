/* ============================================================
   projects.js — Central project registry
   ============================================================
   
   HOW TO ADD A NEW PROJECT:
   ─────────────────────────
   1. Create a new folder, e.g.  /my-app/
   2. Add  privacy-policy.html  and/or  terms.html  inside it
      (copy an existing one as a template and change the content)
   3. Add a new entry to the array below following this format:

   {
     name: "My App Name",
     slug: "my-app",                           // must match the folder name
     description: "Short one-line description of the app.",
     icon: "🚀",                               // emoji shown in the card
     color: "#6366f1",                          // accent color for the icon badge
     links: [
       { label: "Privacy Policy", url: "/my-app/privacy-policy.html" },
       { label: "Terms of Service", url: "/my-app/terms.html" }
     ]
   }

   That's it! The landing page will automatically pick it up.
   ============================================================ */

const projects = [
  {
    name: "MAP — Muslim Audio Player",
    slug: "map",
    description:
      "Offline-first Islamic audio player for Android with Quran radio, equalizer, visualizer, and a one-time premium upgrade.",
    icon: "🎵",
    color: "#1B5E20",
    links: [
      { label: "Privacy Policy", url: "map/privacy-policy.html" },
      { label: "Terms of Service", url: "map/terms.html" },
    ],
  },

  // ── Add more projects below ──────────────────────────────
  // {
  //   name: "Another App",
  //   slug: "another-app",
  //   description: "Brief description of the app.",
  //   icon: "📱",
  //   color: "#2563eb",
  //   links: [
  //     { label: "Privacy Policy", url: "another-app/privacy-policy.html" },
  //     { label: "Terms of Service", url: "another-app/terms.html" },
  //   ],
  // },
];
