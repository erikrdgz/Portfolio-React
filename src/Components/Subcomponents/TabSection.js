import React, { useState } from 'react';


const TabSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col px-0">
          <ul className="nav nav-tabs nav-fill">
            <li className="nav-item ">
              <button
                className={`nav-link w-100 ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Tab 1
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link  w-100 ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Tab 2
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link  w-100 ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Tab 3
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link  w-100 ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)}
              >
                Tab 4
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content mt-3">
        <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
          Content for Tab 1
        </div>
        <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
          Content for Tab 2
        </div>
        <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}>
          Content for Tab 3
        </div>
        <div className={`tab-pane ${activeTab === 4 ? 'active' : ''}`}>
          Content for Tab 4
        </div>
      </div>
    </div>
  );
};

export default TabSection;
