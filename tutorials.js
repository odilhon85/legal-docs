/* ============================================================
   tutorials.js — Tutorial video registry
   ============================================================

   HOW TO ADD A NEW TUTORIAL:
   ──────────────────────────
   Find the app section below and add a new object to its
   "videos" array:

   {
     title: "How to do X",
     description: "Short description (optional, can be empty string).",
     youtubeId: "dQw4w9WgXcQ"    // the ID from the YouTube URL
   }

   The youtubeId is the part after "v=" in a YouTube URL:
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                    ^^^^^^^^^^^

   HOW TO ADD A NEW APP'S TUTORIALS:
   ──────────────────────────────────
   1. Add a new entry to the "tutorialApps" array below
   2. Create a new HTML page: tutorials/my-app.html
      (copy an existing tutorial page and change the slug)
   ============================================================ */

const tutorialApps = [
  {
    name: "MAP — Muslim Audio Player",
    slug: "map",
    description: "Learn how to use MAP — Quran radio, equalizer, playlists, and more.",
    icon: "🎵",
    color: "#1B5E20",
    logo: "../assets/logos/map.png",
    page: "tutorials/map.html",
    videos: [
      // Add MAP tutorials here:
      // {
      //   title: "Getting Started with MAP",
      //   description: "Learn the basics of MAP — Muslim Audio Player.",
      //   youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
      // },
    ],
  },

  {
    name: "QarzDaftar",
    slug: "qarzdaftar",
    description: "Learn how to track debts, back up data, use shared ledger, and more.",
    icon: "📒",
    color: "#1565c0",
    logo: "../assets/logos/qarzdaftar.png",
    page: "tutorials/qarzdaftar.html",
    videos: [
      // Add QarzDaftar tutorials here:
      // {
      //   title: "Getting Started with QarzDaftar",
      //   description: "Learn the basics of debt tracking.",
      //   youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
      // },
    ],
  },

  // ── Add more apps below ──────────────────────────────────
  // {
  //   name: "Another App",
  //   slug: "another-app",
  //   description: "Tutorials for Another App.",
  //   icon: "📱",
  //   color: "#2563eb",
  //   logo: "../assets/logos/another-app.png",
  //   page: "tutorials/another-app.html",
  //   videos: [],
  // },
];

/* Helper: get an app's tutorials by slug */
function getTutorialsBySlug(slug) {
  return tutorialApps.find((app) => app.slug === slug);
}
