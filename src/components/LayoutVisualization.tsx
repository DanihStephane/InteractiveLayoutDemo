import React from 'react';
import { Section } from '../types';

interface LayoutVisualizationProps {
  sections: Section[];
  selectedSection: Section;
}

export default function LayoutVisualization({ sections, selectedSection }: LayoutVisualizationProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <div className="relative aspect-video border-2 border-gray-100 rounded-xl overflow-hidden bg-gray-50">
        {sections.map((section, index) => {
          const isSelected = selectedSection.id === section.id;
          const baseStyle = "absolute transition-all duration-500";
          let positionStyle = "";
          
          switch (section.id) {
            case 'header':
              positionStyle = "top-0 left-0 right-0 h-12";
              break;
            case 'sidebar':
              positionStyle = "top-12 left-0 bottom-12 w-16";
              break;
            case 'main':
              positionStyle = "top-12 left-16 right-0 bottom-12";
              break;
            case 'footer':
              positionStyle = "bottom-0 left-0 right-0 h-12";
              break;
          }

          return (
            <div
              key={section.id}
              className={`${baseStyle} ${positionStyle} ${
                isSelected 
                  ? 'animate-highlight shadow-lg scale-[1.02] z-10' 
                  : 'bg-opacity-30'
              }`}
              style={{
                backgroundColor: section.color,
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}