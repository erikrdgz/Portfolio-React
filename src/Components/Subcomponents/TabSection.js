import React, { useState } from 'react';
import { Tabs, Tab, Box, Fade } from '@mui/material';

const TabSection = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="container px-0 mt-5 py-4 pt-md-2 pb-md-3">
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange} 
        indicatorColor="primary"
        variant="fullWidth"
        className='font-weight-bolder'
      >
        {tabData.map(({ name }, index) => (
          <Tab 
            key={index} 
            label={name} 
            sx={{
              fontWeight: 600, // Initial font-weight
            }}
          />
        ))}
      </Tabs>

      <Box className="tab-content mt-3" style={{ position: 'relative' }}>
        {tabData.map(({ name, content }, index) => (
          <Fade 
            in={activeTab === index} 
            key={index} 
            timeout={{ enter: 1250, exit: 0 }} // Adjust the duration here (e.g., 1000 for 1 second)
          >
            <div 
              role="tabpanel"
              hidden={activeTab !== index}
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              
            >
              <Box p={3}>
                {content}
              </Box>
            </div>
          </Fade>
        ))}
      </Box>
    </div>
  );
};

export default TabSection;
