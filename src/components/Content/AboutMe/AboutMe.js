import { useTranslation } from 'react-i18next';
import { AccordionContainer, SkillTypeTitle, SkillContainer, Text } from '../ContentStyle';
import Skill from './Skill/Skill';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import { SiReact, SiTypescript,SiHtml5, SiAngular, SiJavascript, SiPython, SiC,SiGit } from "react-icons/si";
import { TiArrowSync } from "react-icons/ti";
import Typography from '@mui/material/Typography';

const skills = [
  {
    "title": "Hard Skills: Web",
    "description": "Consiste nas habilidades em desenvolver sistemas para plataformas web e na proficiência do uso de framworks.",
    "list": [
      {
        "name": "React.js",
        "experience": "advanced",
        "description": "",
        "icon": <SiReact />,
        "color": "#112f45"
      },
      {
        "name": "Javascript & Typescript",
        "experience": "intermediate",
        "description": "",
        "icon": <SiTypescript />,
        "color": "#3178c6"
      },
      {
        "name": "HTML & CSS",
        "experience": "intermediate",
        "description": "",
        "icon": <SiHtml5 />,
        "color": "#ec6231"
      },
      {
        "name": "Angular",
        "experience": "begginer",
        "description": "",
        "icon": <SiAngular />,
        "color": "#c63131"
      }
    ]
  },
  {
    "title": "Hard Skills: Coding",
    "description": "Essa lista consiste nas habilidades em solução de problemas, como desafios de programação e desenvolvimento de projetos pequenos.",
    "list": [
      {
        "name": "Javascript",
        "experience": "intermediate",
        "description": "",
        "icon": <SiJavascript color="black"/>,
        "color": "#f0db4f"
      },
      {
        "name": "Python",
        "experience": "intermediate",
        "description": "",
        "icon": <SiPython />,
        "color": "#306998"
      },
      {
        "name": "C",
        "experience": "begginer",
        "description": "",
        "icon": <SiC />,
        "color": "#0556f3"
      }
    ]
  },
  {
    "title": "Other Skills",
    "description": "São habilidades relacionadas à área de tecnologia que não são linguagens de programação, como práticas de desenvolvimento.",
    "list": [
      {
        "name": "Git",
        "experience": "intermediate",
        "description": "",
        "icon": <SiGit />,
        "color": "#F1502F"
      },
      {
        "name": "Agile",
        "experience": "intermediate",
        "description": "",
        "icon": <TiArrowSync />,
        "color": "black"
      }
    ]
  },
  {
    "title": "Languages",
    "list": [
      {
        "name": "Portugues",
        "experience": "nativo",
        "description": ""
      },
      {
        "name": "Inglês",
        "experience": "intermediate",
        "description": ""
      }
    ]
  },
]

const AboutMe = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <SkillContainer>
        {skills.map(skillDetail => 
          <AccordionContainer>
            <Accordion expanded elevation={0}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography gutterBottom variant="h6" component="div">
                  {skillDetail.title}
                </Typography>
              </AccordionSummary>
              { skillDetail?.description && 
                <AccordionDetails>
                  <Text>{skillDetail?.description}</Text>
                </AccordionDetails>
              }
              <AccordionDetails>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {skillDetail.list.map( skill => <Skill
                    name={skill.name}
                    experience={skill.experience}
                    description={skill.description}
                    icon={skill?.icon}
                    color={skill?.color}
                  />
                  )}
                </List>
              </AccordionDetails>
            </Accordion>
          </AccordionContainer>  
        )}     
      </SkillContainer>
    </>
  );
}

export default AboutMe;
