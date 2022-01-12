import { useTranslation } from 'react-i18next';
import { SkillContainer } from '../ContentStyle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Experience = () => {
  const { t } = useTranslation('translation');

  const experience = [
    {
      "name": "GoBots (01/2021-12/2021)",
      "tags": [
        {
          "title": t('projects.tags.intern'),
        },
        {
          "title": t('projects.tags.web'),
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
      "description": t('projects.description.gobots'),
    },
    {
      "name": t('projects.title.secomp'),
      "tags": [
        {
          "title": t('projects.tags.volunteer'),
        },
        {
          "title": t('projects.tags.coordinator'),
        },
        {
          "title": t('projects.tags.event'),
        }
      ],
      "description": t('projects.description.secomp'),
    }
  ];

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
