import { useTranslation } from 'react-i18next';
import { 
  ImageContainer, Image, Container, Title, Info, CollumnContainer, Description, Subtitle, SkillDiv, ExperienceContainer
} from './../GeneralStyle';
import SkillTag from '../../SkillTag/SkillTag';
import { SiReact, SiTypescript,SiJavascript, SiCss3, SiHtml5, SiAngular, SiJava, SiSqlite } from "react-icons/si";
import image from  './../../../about.png';
import Button from '@mui/material/Button';

const Skills = () => {
  const { t, i18n} = useTranslation('translation');

  const info = [
    {
      "name": "Front-end skills",
      "skills": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Javascript",
          "icon": <SiJavascript />
        },
        {
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Back-end skills",
      "skills": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Javascript",
          "icon": <SiJavascript />
        },
        {
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Coding and problem solving",
      "skills": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Javascript",
          "icon": <SiJavascript />
        },
        {
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Soft skills",
      "skills": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Javascript",
          "icon": <SiJavascript />
        },
        {
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    }
  ];

  return (
    <Container>
      <CollumnContainer>
        <Title>{t('tabs.skills')}</Title>
        {info.map( elem => 
          <ExperienceContainer>
            <Subtitle>{elem.name}</Subtitle>
            <Description>
              {elem.description}
            </Description>
            <SkillDiv>
              {elem.skills.map( skill => <SkillTag name={skill.name} icon={skill.icon} />)}
            </SkillDiv>
          </ExperienceContainer>
        )}
      </CollumnContainer>
    </Container>
  );
}

export default Skills;
