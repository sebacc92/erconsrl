/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Tabs({ tabs, selectedTab }) {
  const [activeTab, setActiveTab] = useState(
    selectedTab ? tabs[selectedTab] : tabs[0]
  );

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`text-lg ${
                activeTab.id === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
}

export default Tabs;
