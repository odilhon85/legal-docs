# Legal Docs — Islomov Odilhon Rustamovich

A central GitHub Pages site hosting **privacy policies** and **terms of service** for all applications by Islomov Odilhon Rustamovich.

🔗 **Live site:** [https://odilhon85.github.io/legal-docs/](https://odilhon85.github.io/legal-docs/)

---

## 📁 Structure

```
├── index.html              ← Landing page (auto-generates project cards)
├── style.css               ← Shared stylesheet
├── projects.js             ← Project registry (edit this to add/remove projects)
├── map/
│   ├── privacy-policy.html ← MAP - Muslim Audio Player privacy policy
│   └── terms.html          ← MAP - Muslim Audio Player terms of service
└── README.md
```

## ➕ How to Add a New Project

**Step 1:** Create a new folder with your project's slug:

```
mkdir my-new-app
```

**Step 2:** Copy an existing page as a template and update the content:

```
cp map/privacy-policy.html my-new-app/privacy-policy.html
cp map/terms.html my-new-app/terms.html
```

Edit the copied files — replace the content, title, badge color, and project name.

**Step 3:** Open `projects.js` and add a new entry to the array:

```js
{
  name: "My New App",
  slug: "my-new-app",
  description: "Short description of the app.",
  icon: "📱",
  color: "#2563eb",
  links: [
    { label: "Privacy Policy", url: "my-new-app/privacy-policy.html" },
    { label: "Terms of Service", url: "my-new-app/terms.html" },
  ],
},
```

**Step 4:** Commit and push:

```bash
git add .
git commit -m "Add My New App legal docs"
git push
```

The landing page will automatically show the new card. Done!

## 🛠 Tech

- Pure HTML, CSS, and vanilla JavaScript — no build tools or frameworks
- Hosted on GitHub Pages (free)
- Responsive design with Inter font

## 📄 Current Projects

| Project | Privacy Policy | Terms |
|---------|---------------|-------|
| MAP — Muslim Audio Player | [View](map/privacy-policy.html) | [View](map/terms.html) |
| QarzDaftar | [View](qarzdaftar/privacy-policy.html) | [View](qarzdaftar/terms.html) |

## 📬 Contact

- **Developer:** Islomov Odilhon Rustamovich
- **Email:** odilhon1985@gmail.com
- **Telegram:** [@devioruz](https://t.me/devioruz)
