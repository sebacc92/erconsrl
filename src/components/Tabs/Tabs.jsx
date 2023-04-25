import React, { useState } from 'react';

function Tabs({ tabs, selectedTab }) {
  const [activeTab, setActiveTab] = useState(
    selectedTab ? tabs[selectedTab] : tabs[0]
  );

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="flex bg-gray-600">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`text-lg p-4 ${
                activeTab.id === tab.id
                  ? 'border-b-2 border-blue-500 text-white bg-gray-500'
                  : 'text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="mx-auto p-4">{activeTab.content}</div>
    </div>
  );
}

export default Tabs;
