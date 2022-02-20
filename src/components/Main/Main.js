import { Container, Content, MenuWrapper, MenuContainer, MenuButton } from './MainStyle';
import { useTranslation } from 'react-i18next';
import Introduction from '../Content/Introduction/Introduction';
import About from '../Content/About/About';
import Experience from '../Content/Experience/Experience';
import Skills from '../Content/Skills/Skills';
import Projects from '../Content/Projects/Projects';
import Contact from '../Content/Contact/Contact';
import ChangeLang from '../ChangeLang/ChangeLang';
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
      <MenuWrapper>
        <MenuContainer>
            <Link activeClass="active" align="middle" className='about-link' to="about" spy={true} smooth={true} duration={500} >
              <MenuButton>{t('tabs.about')}</MenuButton>
            </Link>
            <Link activeClass="active" align="middle" className='exp-link' to="experience" spy={true} smooth={true} duration={500} >
              <MenuButton>{t('tabs.experience')}</MenuButton>
            </Link>
            <Link activeClass="active" align="middle" className='skills-link' to="skills" spy={true} smooth={true} duration={500} >
              <MenuButton>{t('tabs.skills')}</MenuButton>
            </Link>
            <Link activeClass="active" align="middle" className='proj-link' to="projects" spy={true} smooth={true} duration={500} >
              <MenuButton>{t('tabs.projects')}</MenuButton>
            </Link>
            <Link activeClass="active" align="middle" className='contact-link' to="contact" spy={true} smooth={true} duration={500} >
              <MenuButton>{t('tabs.contact')}</MenuButton>
            </Link>
            <ChangeLang />
        </MenuContainer>
      </MenuWrapper>
      <Content>
        <Introduction />
        <div className="about">
          <About />
        </div>
        <div className="experience">
          <Experience/>
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects">
          <Projects/>
        </div>
        <div className="contact">
          <Contact/>
        </div>
      </Content>
    </Container>
  );
}

export default Main;
