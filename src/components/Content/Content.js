import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import { ContentContainer } from './ContentStyle';

const Content = () => {
  const { t, i18n } = useTranslation('translation');
  const [value, setValue] = useState('about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabContent = () => {
    switch (value) {
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      default:
        return <AboutMe/>
    }
  }

  return (
    <ContentContainer>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={t('tabs.about')} value="about"/>
          <Tab label={t('tabs.experience')} value="experience"/>
          <Tab label={t('tabs.projects')} value="projects"/>
        </Tabs>
      </Box>
      <TabContent/>
    </ContentContainer>
  );
}

export default Content;
