import { useTranslation } from 'react-i18next';
import { GridContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import Stack from '@mui/material/Stack';
import SkillTag from '../../SkillTag/SkillTag';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';
import archive from './img/laptop.jpg';
import pokedex from './img/pokedex.jpg';
import python from './img/python.jpg';
import devdotto from './img/devto.png';
import { SiReact, SiPython, SiJavascript, SiCss3, SiHtml5, SiDevdotto } from "react-icons/si";

const Projects = () => {
  const { t } = useTranslation('translation');

  const experience = [
    {
      "name": t('projects.title.portifolio'),
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
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": t('projects.description.portifolio'),
      "img": <CardMedia
        component="img"
        height="140"
        image={archive}
        alt="image alt"
      />,
      "rep": "https://github.com/NatSatie/portifolio/tree/react-project"
    },
    {
      "name": t('projects.title.pokemon'),
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
          "name": "HTML",
          "icon": <SiHtml5 />
        },
        {
          "name": "CSS",
          "icon": <SiCss3 />
        }
      ],
      "description": t('projects.description.pokemon'),
      "img": <CardMedia
        component="img"
        height="140"
        image={pokedex}
        alt="image alt"
      />,
      "rep": "https://github.com/NatSatie/pokemon-list",
      "demo": "https://mr34l.sse.codesandbox.io/"
    },
    {
      "name": t('projects.title.uber'),
      "tags": [
        {
          "name": "Python",
          "icon": <SiPython />
        }
      ],
      "description": t('projects.description.uber'),
      "img": <CardMedia
        component="img"
        height="140"
        image={python}
        alt="image alt"
      />,
      "linkTo": "https://dev.to/satie_sann/uber-movement-antes-e-depois-do-covid-19-17m",
      "rep": "https://github.com/NatSatie/MS211-project",
    },
    {
      "name": t('projects.title.compiler'),
      "tags": [
        {
          "name": "Python",
          "icon": <SiPython />
        }
      ],
      "description": t('projects.description.compiler'),
      "img": <CardMedia
        component="img"
        height="140"
        image={python}
        alt="image alt"
      />,
      "rep": "https://github.com/NatSatie/first-api-oda",
    },
    {
      "name": t('projects.title.devto'),
      "description": t('projects.description.devto'),
      "tags": [
        {
          "name": "Study notes"
        }
      ],
      "img": <CardMedia
        component="img"
        height="140"
        image={devdotto}
        alt="image alt"
      />,
      "linkTo": "https://dev.to/satie_sann",
    }
  ];

  return (
    <Container isColumn>
        <Title>{t('tabs.projects')}</Title>
        <GridContainer>
          {experience.map( exp => <ProjectCard name={exp.name} img={exp.img} tags={exp.tags} description={exp.description} rep={exp?.rep} demo={exp?.demo} linkTo={exp?.linkTo}/>)}
        </GridContainer>
    </Container>
  );
}

export default Projects;
