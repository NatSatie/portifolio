import { useTranslation } from 'react-i18next';
import { SkillContainer } from '../ContentStyle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const experience = [
  {
    "name": "GoBots (01/2021-12/2021)",
    "tags": [
      {
        "title": "Estágio",
      },
      {
        "title": "Desenvolvimento Web",
      },
      {
        "title": "React.js",
      },
      {
        "title": "Javascript",
      },
      {
        "title": "Angular",
      }
    ],
    "description": "Eh um projetoasdas asdasdsaddas das adsasdasdasdasasddasd em reacasd asdasdt.j",
  },
  {
    "name": "SECOMP - Semana Acadêmica de Computação da UNICAMP (2017-2018)",
    "tags": [
      {
        "title": "Trabalho Voluntário",
      },
      {
        "title": "Coordenação",
      },
      {
        "title": "Organização de eventos",
      }
    ],
    "description": "Coordenadora de Comunicação: Eh um projetoasdas asdasdsaddas das adsasdasdasdasasddasd em reacasd asdasdt.j",
  }
];

const Experience = () => {
  const { t } = useTranslation('translation');

  return (
    <SkillContainer>
      {experience.map( elem => 
        <Card sx={{ maxWidth: 600, display: 'flex' }} elevation={0}>
          <CardActions>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
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
          </CardActions>
        </Card>
      )}
    </SkillContainer>
  );
}

export default Experience;
