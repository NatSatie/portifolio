import { useTranslation } from 'react-i18next';
import { SkillContainer } from '../ContentStyle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pokedex from './img/pokedex.jpg';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { SiGithub, SiCodesandbox } from "react-icons/si";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const experience = [
  {
    "name": "Pokedex Geração 1",
    "tags": [
      {
        "title": "Projeto"
      },
      {
        "title": "React.js"
      }
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend vitae augue at sollicitudin. Sed non libero sit amet magna aliquet feugiat eget vel diam. Cras pharetra ante non enim.",
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

const Projects = () => {
  const { t } = useTranslation('translation');

  return (
    <SkillContainer>
      {experience.map( elem => 
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {elem.img}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elem.name}
              </Typography>
              <Stack direction="row" spacing={1}>
                { elem.tags.map( tag =>
                  <Chip label={tag.title} size="small" /> 
                )}
              </Stack>
              <Typography variant="body2" color="text.secondary">
                <br></br>
                {elem.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <SiGithub/>
              Github
            </Button>
            <Button size="small" color="primary">
              <SiCodesandbox />
              Demo
            </Button>
          </CardActions>
        </Card>
      )}
    </SkillContainer>
  );
}

export default Projects;