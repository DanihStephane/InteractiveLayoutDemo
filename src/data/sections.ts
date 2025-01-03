export const sections = [
  {
    id: 'header',
    title: 'En-tête',
    code: `header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
}`,
    color: '#6366F1' // Indigo
  },
  {
    id: 'sidebar',
    title: 'Barre latérale',
    code: `aside {
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 20px;
  overflow-y: auto;
}`,
    color: '#8B5CF6' // Purple
  },
  {
    id: 'main',
    title: 'Contenu principal',
    code: `main {
  margin-left: 250px;
  padding: 24px;
  min-height: calc(100vh - 120px);
  background: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
}`,
    color: '#EC4899' // Pink
  },
  {
    id: 'footer',
    title: 'Pied de page',
    code: `footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    color: '#14B8A6' // Teal
  }
];