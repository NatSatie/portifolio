import { useTranslation } from 'react-i18next';
import { GridContainer, Container, Title, SkillDiv, Description, Subtitle, ExperienceContainer} from './../GeneralStyle';
import SkillTag from '../../SkillTag/SkillTag';
import { SiReact, SiTypescript,SiJavascript, SiCss3, SiHtml5, SiAngular, SiJava, SiSqlite } from "react-icons/si";

const Experience = () => {
  const { t } = useTranslation('translation');

  const experience = [
    {
        "name": t('projects.title.matera'),
        "tags": [
            {
                "name": "Java",
                "icon": <SiJava />
            },
            {
                "name": "PL/SQL",
                "icon": <SiSqlite />
            }
        ],
        "description": t('projects.description.matera')
    },
    {
      "name": "GoBots (01/2021-12/2021)",
      "tags": [
        {
          "name": "React.js",
          "icon": <SiReact />
        },
        {
          "name": "Javascript",
          "icon": <SiJavascript />
        },
        {
          "name": "Typescript",
          "icon": <SiTypescript />
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
      "description": t('projects.description.gobots')
    },
    {
      "name": t('projects.title.secomp'),
      "tags": [
        {
          "name": t('projects.tags.coordinator'),
        },
        {
          "name": t('projects.tags.event'),
        }
      ],
      "description": t('projects.description.secomp')
    },
    {
      "name": t('projects.title.gamux'),
      "tags": [
        {
          "name": t('projects.tags.event'),
        },
        {
          "name": t('projects.tags.volunteer'),
        }
      ],
      "description": t('projects.description.gamux')
    }
  ];

  return (
    <Container isColumn>
        <Title>{t('tabs.experience')}</Title>
        <GridContainer>
          {experience.map( exp => 
            <ExperienceContainer>
              <Subtitle>{exp.name}</Subtitle>
              <SkillDiv>
                  {exp.tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />)}
              </SkillDiv>
              <Description>
                  {exp.description}
              </Description>
            </ExperienceContainer>
          )}
        </GridContainer>
    </Container>
  );
}

export default Experience;
