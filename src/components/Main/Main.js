import { Container, MenuWrapper, MenuContainer, MenuButton } from './MainStyle';
import { useTranslation } from 'react-i18next';
import Introduction from '../Content/Introduction/Introduction';
import About from '../Content/About/About';
import Experience from '../Content/Experience/Experience';
import Projects from '../Content/Projects/Projects';
import Contact from '../Content/Contact/Contact';
import Stack from '@mui/material/Stack';
import ChangeLang from '../ChangeLang/ChangeLang';

const Main = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
      <MenuWrapper>
        <MenuContainer>
            <MenuButton>{t('tabs.about')}</MenuButton>
            <MenuButton>{t('tabs.experience')}</MenuButton>
            <MenuButton>{t('tabs.projects')}</MenuButton>
            <MenuButton>{t('tabs.contact')}</MenuButton>
            <ChangeLang />
        </MenuContainer>
      </MenuWrapper>
      <Introduction />
      <About />
      <Experience/>
      <Projects/>
      <Contact/>
    </Container>
  );
}

export default Main;
