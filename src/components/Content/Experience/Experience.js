import { useTranslation } from 'react-i18next';
import { RowContainer, SecondarySubtitle, Container, Title, CollumnContainer, Description } from './../GeneralStyle';
import Stack from '@mui/material/Stack';
import SkillTag from '../../SkillTag/SkillTag';
import { SiReact, SiTypescript,SiHtml5, SiAngular, SiJava, SiSqlite } from "react-icons/si";

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
          "name": "Javascript & Typescript",
          "icon": <SiTypescript />
        },
        {
          "name": "HTML & CSS",
          "icon": <SiHtml5 />
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
        <RowContainer>
            <CollumnContainer>
                <SecondarySubtitle>{experience[0].name}</SecondarySubtitle>
                <Stack direction="row" spacing={2}>
                    {experience[0].tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
                <Description>
                    {experience[0].description}
                </Description>
                <SecondarySubtitle>{experience[1].name}</SecondarySubtitle>
                <Stack direction="row" spacing={2}>
                    {experience[1].tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
                <Description>
                    {experience[1].description}
                </Description>
            </CollumnContainer>
            <CollumnContainer>
                <SecondarySubtitle>{experience[2].name}</SecondarySubtitle>
                <Stack direction="row" spacing={2}>
                    {experience[2].tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
                <Description>
                    {experience[2].description}
                </Description>
                <SecondarySubtitle>{experience[3].name}</SecondarySubtitle>
                <Stack direction="row" spacing={2}>
                    {experience[3].tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
                <Description>
                    {experience[3].description}
                </Description>
            </CollumnContainer>
        </RowContainer>
    </Container>
  );
}

export default Experience;
