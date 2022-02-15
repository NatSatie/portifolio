import { useTranslation } from 'react-i18next';
import { RowContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import Stack from '@mui/material/Stack';
import SkillTag from '../../SkillTag/SkillTag';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';
import archive from './img/archive.png';
import pokedex from './img/pokedex.jpg';

const Projects = () => {
  const { t } = useTranslation('translation');

  const experience = [
    {
      "name": t('projects.title.portifolio'),
      "tags": [
        {
          "title": t('projects.tags.project')
        },
        {
          "title": "React.js"
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
          "title": t('projects.tags.project')
        },
        {
          "title": "React.js"
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
    }
  ];

  return (
    <Container isColumn>
        <Title>{t('tabs.projects')}</Title>
        {experience.map( exp => <ProjectCard name={exp.name} img={exp.img} tags={exp.tags} description={exp.description} rep={exp.rep} demo={exp.demo} />)}
    </Container>
  );
}

export default Projects;
