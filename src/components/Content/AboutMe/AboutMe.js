import { useTranslation } from 'react-i18next';
import { AccordionContainer, SkillTypeTitle, SkillContainer, Text } from '../ContentStyle';
import Skill from './Skill/Skill';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import { SiReact, SiTypescript,SiHtml5, SiAngular, SiJavascript, SiPython, SiC,SiGit } from "react-icons/si";
import { TiArrowSync } from "react-icons/ti";

const AboutMe = () => {
  const { t } = useTranslation('translation');

  const webHardSkillList = [
    {
      "name": "React.js",
      "experience": "advanced",
      "description": "",
      "icon": <SiReact />,
      "color": "black"
    },
    {
      "name": "Javascript & Typescript",
      "experience": "intermediate",
      "description": "",
      "icon": <SiTypescript />,
      "color": "black"
    },
    {
      "name": "HTML & CSS",
      "experience": "intermediate",
      "description": "",
      "icon": <SiHtml5 />,
      "color": "black"
    },
    {
      "name": "Angular",
      "experience": "begginer",
      "description": "",
      "icon": <SiAngular />,
      "color": "black"
    }
  ];

  const programmingHardSkillList = [
    {
      "name": "Javascript",
      "experience": "intermediate",
      "description": "",
      "icon": <SiJavascript />,
      "color": "black"
    },
    {
      "name": "Python",
      "experience": "intermediate",
      "description": "",
      "icon": <SiPython />,
      "color": "black"
    },
    {
      "name": "C",
      "experience": "begginer",
      "description": "",
      "icon": <SiC />,
      "color": "black"
    }
  ];

  const skillList = [
    {
      "name": "Git",
      "experience": "intermediate",
      "description": "",
      "icon": <SiGit />,
      "color": "black"
    },
    {
      "name": "Agile",
      "experience": "intermediate",
      "description": "",
      "icon": <TiArrowSync />,
      "color": "black"
    }
  ];

  return (
    <>
      <SkillContainer>
        <AccordionContainer>
          <Accordion expanded elevation={0}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SkillTypeTitle> Hard Skills: Web </SkillTypeTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Text>Consiste nas habilidades em desenvolver sistemas para plataformas web e na proficiência do uso de framworks.</Text>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {webHardSkillList.map(skill => <Skill
                  name={skill.name}
                  experience={skill.experience}
                  description={skill.description}
                  icon={skill.icon}
                  color={skill.color}
                />)}
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
        <AccordionContainer>
          <Accordion expanded elevation={0}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SkillTypeTitle> Hard Skills: Coding </SkillTypeTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Text> Essa lista consiste nas habilidades em solução de problemas, como desafios de programação e desenvolvimento de projetos pequenos. </Text>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {programmingHardSkillList.map(skill =>
                  <Skill
                    name={skill.name}
                    experience={skill.experience}
                    description={skill.description}
                    icon={skill.icon}
                    color={skill.color}
                  />)}
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
        <AccordionContainer>
          <Accordion expanded elevation={0}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SkillTypeTitle> Other Skills </SkillTypeTitle>
            </AccordionSummary>
            <AccordionDetails>
            <Text> São habilidades relacionadas à área de tecnologia que não são linguagens de programação, como práticas de desenvolvimento. </Text>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {skillList.map(skill =>
                  <Skill
                    name={skill.name}
                    experience={skill.experience}
                    description={skill.description}
                    icon={skill.icon}
                    color={skill.color}
                  />)}
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
        
      </SkillContainer>
    </>
  );
}

export default AboutMe;
