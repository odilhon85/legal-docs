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
    logo: "assets/logos/map.png",   // optional — path to app logo image
    links: [
      { label: "Privacy Policy", url: "map/privacy-policy.html" },
      { label: "Terms of Service", url: "map/terms.html" },
    ],
  },

  {
    name: "QarzDaftar",
    slug: "qarzdaftar",
    description:
      "Privacy-first personal debt & loan tracker with Google Drive backup, shared ledger, export to Excel/PDF, and biometric lock.",
    icon: "📒",
    color: "#1565c0",
    logo: "assets/logos/qarzdaftar.png",
    links: [
      { label: "Privacy Policy", url: "qarzdaftar/privacy-policy.html" },
      { label: "Terms of Use", url: "qarzdaftar/terms.html" },
    ],
  },

  {
    name: "MediCalculator",
    slug: "medicalculator",
    description:
      "Offline medical calculator for Android with calculation history, favorites, ads removal option, and dark mode.",
    icon: "🩺",
    color: "#1565c0",
    logo: "assets/logos/medicalculator.png",
    links: [
      { label: "Privacy Policy", url: "medicalculator/privacy-policy.html" },
    ],
  },

  // ── Add more projects below ──────────────────────────────
];
