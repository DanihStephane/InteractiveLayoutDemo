import React from 'react';
import NavigationBar from './NavigationBar';
import CodeDisplay from './CodeDisplay';
import LayoutVisualization from './LayoutVisualization';
import { sections } from '../data/sections';

export default function Layout() {
  const [selectedSection, setSelectedSection] = React.useState(sections[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavigationBar
        sections={sections}
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      <div className="container mx-auto pt-24 px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CodeDisplay selectedSection={selectedSection} />
          <LayoutVisualization
            sections={sections}
            selectedSection={selectedSection}
          />
        </div>
      </div>
    </div>
  );
}