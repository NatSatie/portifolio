import { useTranslation } from 'react-i18next';
import { Image, Container, Title, Subtitle, CollumnContainer, SecondaryTitle, SkillDiv } from './../GeneralStyle';
import image from  './../../../main.png'
import Stack from '@mui/material/Stack';
import { SiReact, SiTypescript,SiHtml5, SiAngular, SiJava, SiSqlite } from "react-icons/si";
import SkillTag from '../../SkillTag/SkillTag';

const Introduction = () => {
  const { t } = useTranslation('translation');

  const front = [
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
  ];

  const back = [
    {
      "name": "Java",
      "icon": <SiJava />
    },
    {
        "name": "PL/SQL",
        "icon": <SiSqlite />
      }
  ];

  return (
    <Container>
        <CollumnContainer>
            <Title>Natália Satie Odashima</Title>
            <Subtitle>
                Software Developer
            </Subtitle>
            <SkillDiv>
                <SecondaryTitle>
                    {t('bio.front')}
                </SecondaryTitle>
                <Stack direction="row" spacing={2}>
                    { front.map(elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
            </SkillDiv>
            <SkillDiv>
                <SecondaryTitle>
                    {t('bio.back')}
                </SecondaryTitle>
                <Stack direction="row" spacing={2}>
                    { back.map(elem => <SkillTag name={elem.name} icon={elem.icon} />)}
                </Stack>
            </SkillDiv>
        </CollumnContainer>
        <Image src={image}/>
    </Container>
  );
}

export default Introduction;
