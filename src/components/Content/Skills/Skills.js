import { useTranslation } from 'react-i18next';
import { 
  ImageContainer, Image, Container, Title, Info, CollumnContainer, Description, Subtitle, SkillDiv, ExperienceContainer
} from './../GeneralStyle';
import SkillTag from '../../SkillTag/SkillTag';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCss3, SiHtml5,
  SiAngular,
  SiJava, SiSqlite,
  SiCplusplus, SiPython, SiGit
} from "react-icons/si";
import image from  './../../../about.png';
import Button from '@mui/material/Button';

const Skills = () => {
  const { t, i18n} = useTranslation('translation');

  const info = [
    {
      "name": t('skill.coding.web.title'),
      "skills": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Typescript",
          "icon": <SiTypescript />
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
        },
        {
          "name": "Angular",
          "icon": <SiAngular />
        }
      ],
      "description": t('skill.coding.web.description'),
      "experience": t('skill.advanced.title')+ ". "+t('skill.advanced.description'),
    },
    {
      "name": t('skill.coding.back.title'),
      "skills": [
        {
          "name": "Java",
          "icon": <SiJava />
        },
        {
            "name": "PL/SQL",
            "icon": <SiSqlite />
        }
      ],
      "description": t('skill.coding.back.description'),
      "experience": t('skill.intermediate.title')+ ". "+t('skill.intermediate.description'),
    },
    {
      "name": t('skill.coding.code.title'),
      "skills": [
        {
          "name": "C++",
          "icon": <SiCplusplus />
        },
        {
          "name": "Python",
          "icon": <SiPython />
        }
      ],
      "description": t('skill.coding.code.description'),
      "experience": t('skill.intermediate.title')+ ". "+t('skill.intermediate.description'),
    },
    {
      "name": t('skill.coding.other.title'),
      "skills": [
        {
          "name": "Git",
          "icon": <SiGit />
        },
        {
          "name": "Agile"
        },
        {
          "name": t('skill.coding.other.teamwork')
        }
      ],
      "description": t('skill.coding.other.description'),
      "experience": t('skill.intermediate.title')+ ". "+t('skill.intermediate.description'),
    },
    {
      "name": t('skill.coding.lang.title') + ": " + t('skill.coding.lang.pt'),
      "description": t('skill.nativo.title'),
    },
    {
      "name": t('skill.coding.lang.title') + ": " + t('skill.coding.lang.en'),
      "description": t('skill.coding.lang.enDescription'),
    }
  ];

  return (
    <Container>
      <CollumnContainer>
        <Title>{t('tabs.skills')}</Title>
        {info.map( elem => 
          <ExperienceContainer>
            <Subtitle>{elem.name}</Subtitle>
            {elem.skills &&
              <SkillDiv>
                {elem.skills.map( skill => <SkillTag name={skill.name} icon={skill?.icon} />)}
              </SkillDiv>
            }
            <Description>
              {elem.description}
            </Description>]
            {
              elem?.experience && 
              <Description>
                <b>{t('skill.experience')}</b> {elem?.experience}
              </Description>
            }
          </ExperienceContainer>
        )}
      </CollumnContainer>
    </Container>
  );
}

export default Skills;
