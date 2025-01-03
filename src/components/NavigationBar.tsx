import React from 'react';
import { LayoutTemplate } from 'lucide-react';
import { Section } from '../types';

interface NavigationBarProps {
  sections: Section[];
  selectedSection: Section;
  onSectionSelect: (section: Section) => void;
}

export default function NavigationBar({ sections, selectedSection, onSectionSelect }: NavigationBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LayoutTemplate className="h-7 w-7 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Layout Démo
            </span>
          </div>
          <div className="flex space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionSelect(section)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium
                  ${selectedSection.id === section.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105 animate-pulse'
                    : 'hover:bg-indigo-50 text-gray-700 hover:text-indigo-600'
                  }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}