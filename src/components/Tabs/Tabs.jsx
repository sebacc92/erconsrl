import React, { useState } from 'react';

function Tabs({ tabs, selectedTab }) {
  const [activeTab, setActiveTab] = useState(
    selectedTab ? tabs[selectedTab] : tabs[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="hidden sm:flex sm:flex-row justify-center bg-gray-600">
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
        <div className="sm:hidden">
          <button
            type="button"
            className="text-lg p-4 text-black bg-white flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {activeTab.title}
            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute border border-gray-600 mt-1 z-20">
              {tabs
                .filter((tab) => tab.id !== activeTab.id)
                .map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    className={`text-lg w-full p-4 text-black text-left ${
                      activeTab.id === tab.id ? 'bg-gray-500' : 'bg-white'
                    }`}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsOpen(false);
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto p-4">{activeTab.content}</div>
    </div>
  );
}

export default Tabs;
