import React from 'react';
import { Code2 } from 'lucide-react';
import { Section } from '../types';

interface CodeDisplayProps {
  selectedSection: Section;
}

export default function CodeDisplay({ selectedSection }: CodeDisplayProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-lg">
          <Code2 className="h-5 w-5 text-indigo-400" />
          <h2 className="text-lg font-medium text-white">
            {selectedSection.title}
          </h2>
        </div>
      </div>
      <pre className="bg-gray-800/50 p-6 rounded-xl overflow-x-auto">
        <code className="text-gray-100 font-mono text-sm leading-relaxed">
          {selectedSection.code}
        </code>
      </pre>
    </div>
  );
}