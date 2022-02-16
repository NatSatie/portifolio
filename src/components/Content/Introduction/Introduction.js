import { useTranslation } from 'react-i18next';
import { ImageContainer, Image, Container, Title, Subtitle, CollumnContainer, SecondaryTitle, SkillDiv } from './../GeneralStyle';
import image from  './../../../main.png'
import Stack from '@mui/material/Stack';
import { SiReact, SiTypescript, SiJavascript,SiHtml5, SiAngular, SiJava, SiCss3, SiSqlite } from "react-icons/si";
import SkillTag from '../../SkillTag/SkillTag';

const Introduction = () => {
  const { t } = useTranslation('translation');

  const front = [
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
        <CollumnContainer isShared>
            <Title>Natália Satie Odashima</Title>
            <Subtitle>
              {t('bio.subtitle')}
            </Subtitle>
            <SecondaryTitle>
                {t('bio.front')}
            </SecondaryTitle>
            <SkillDiv>
              { front.map(elem => <SkillTag name={elem.name} icon={elem.icon} />)}
            </SkillDiv>
            <SecondaryTitle>
                {t('bio.back')}
            </SecondaryTitle>
            <SkillDiv>
              { back.map(elem => <SkillTag name={elem.name} icon={elem.icon} />)}
            </SkillDiv>
        </CollumnContainer>
        <ImageContainer>
          <Image src={image}/>
        </ImageContainer>
    </Container>
  );
}

export default Introduction;
