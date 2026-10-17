# 💜 Portfolio — Koussava Jémima Victoire Délaley

Portfolio personnel en HTML / CSS / JavaScript pur.  
Thème : **Violet · Blanc · Rose** avec animations et design responsive.

---

## 📁 Structure du projet

```
portfolio/
│
├── index.html          ← Page principale (ouvrir dans le navigateur)
├── css/
│   └── style.css       ← Tous les styles (variables, animations, layout)
├── js/
│   └── main.js         ← Animations, scroll reveal, curseur, interactions
├── assets/
│   └── photo.js        ← Photo de profil encodée en base64
└── README.md
```

---

## 🚀 Lancer en local (VS Code)

1. Ouvre le dossier dans **VS Code**
2. Installe l'extension **Live Server** (si pas encore installée)
3. Fais un clic droit sur `index.html` → **"Open with Live Server"**
4. Le portfolio s'ouvre automatiquement dans ton navigateur 🎉

---

## 📦 Déployer sur GitHub Pages

```bash
# 1. Initialise Git dans le dossier
git init

# 2. Ajoute tous les fichiers
git add .

# 3. Premier commit
git commit -m "🚀 Initial commit - Portfolio Victoire"

# 4. Connecte ton dépôt GitHub (remplace l'URL par la tienne)
git remote add origin https://github.com/TON_USERNAME/portfolio.git

# 5. Pousse le code
git push -u origin main
```

Ensuite sur GitHub :
- Va dans **Settings** → **Pages**
- Source : **Deploy from branch** → `main` → `/ (root)`
- Clique **Save** → Ton site sera en ligne sur `https://TON_USERNAME.github.io/portfolio/` 🌐

---

## ✏️ Modifier le contenu

| Ce que tu veux changer | Fichier à éditer |
|---|---|
| Textes, sections HTML | `index.html` |
| Couleurs, polices, tailles | `css/style.css` (variables en haut du fichier) |
| Animations, interactions | `js/main.js` |
| Photo de profil | Remplace `assets/photo.js` (voir ci-dessous) |

### Changer la photo de profil
1. Convertis ta nouvelle photo en base64 (via [base64.guru](https://base64.guru/converter/encode/image))
2. Dans `assets/photo.js`, remplace la valeur de `PHOTO_DATA`

### Changer les couleurs
Dans `css/style.css`, modifie les variables CSS tout en haut :
```css
:root {
  --violet: #6B21A8;       /* Violet foncé principal */
  --violet-light: #9333EA; /* Violet clair */
  --rose: #EC4899;         /* Rose principal */
  --rose-light: #F472B6;   /* Rose clair */
}
```

---

## 🛠️ Technologies utilisées

- **HTML5** — Structure sémantique
- **CSS3** — Variables, Grid, Flexbox, animations, keyframes
- **JavaScript vanilla** — Intersection Observer, scroll events, curseur custom

---

Made with 💜 by Victoire Koussava
