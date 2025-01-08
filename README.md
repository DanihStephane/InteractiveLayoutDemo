# Layout Démo 🎨

Une application React moderne démontrant les concepts de mise en page web avec des animations interactives et du code CSS en temps réel.

![Capture d’écran du 2025-01-03 22-49-17](https://github.com/user-attachments/assets/65891521-d002-4e1b-9198-1b896a722290)


## ✨ Fonctionnalités

- 🎯 Visualisation interactive des composants de mise en page
- 💻 Affichage du code CSS en temps réel
- 🌈 Animations fluides et modernes
- 📱 Design responsive
- 🎨 Interface utilisateur élégante

## 🛠️ Technologies

- **React** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Lucide React** - Icônes modernes
- **Vite** - Build tool

## 🏗️ Architecture

```
src/
├── components/          # Composants React
│   ├── Layout.tsx         # Composant principal
│   ├── NavigationBar.tsx  # Barre de navigation
│   ├── CodeDisplay.tsx    # Affichage du code
│   └── LayoutVisualization.tsx  # Visualisation du layout
├── data/               # Données statiques
│   └── sections.ts       # Configuration des sections
├── types/              # Types TypeScript
└── styles/             # Styles CSS
```

## 🚀 Installation

```bash
# Cloner le projet
git clone git@github.com:DanihStephane/InteractiveLayoutDemo.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 💡 Utilisation

1. Naviguez entre les différentes sections (Header, Sidebar, Main, Footer)
2. Observez le code CSS correspondant à gauche
3. Visualisez la mise en page interactive à droite
4. Les sections sélectionnées sont mises en évidence avec des animations

## 🎨 Personnalisation

### Ajouter une nouvelle section

1. Ajoutez la configuration dans `src/data/sections.ts`:
```typescript
{
  id: 'nouvelle-section',
  title: 'Nouvelle Section',
  code: `/* Votre CSS */`,
  color: '#HEX-COLOR'
}
```

2. Mettez à jour le composant `LayoutVisualization` pour gérer la nouvelle section

## 📝 License

free : https://github.com/DanihStephane

---

Créé avec ❤️ en utilisant React et TypeScript
