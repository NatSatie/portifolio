import { useTranslation } from 'react-i18next';
import { RowContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import Stack from '@mui/material/Stack';
import SkillTag from '../../SkillTag/SkillTag';

const Projects = () => {
  const { t } = useTranslation('translation');

  /* const experience = [
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
  ]; */

  return (
    <Container isColumn>
        <Title>{t('tabs.projects')}</Title>
        <RowContainer>
            <CollumnContainer>
                <SecondarySubtitle>{t('education.title')}</SecondarySubtitle>
                <Stack direction="row" spacing={2}>
                    <SkillTag name="asdasdasd" />
                </Stack>
                <Description>
                    {t('education.graduation')}
                </Description>
                <SecondarySubtitle>{t('education.title')}</SecondarySubtitle>
                <Description>
                    {t('education.graduation')}
                </Description>
            </CollumnContainer>
            <CollumnContainer>
                <SecondarySubtitle>{t('education.title')}</SecondarySubtitle>
                <Description>
                    {t('education.graduation')}
                </Description>
                <SecondarySubtitle>{t('education.title')}</SecondarySubtitle>
                <Description>
                    {t('education.graduation')}
                </Description>
            </CollumnContainer>
        </RowContainer>
    </Container>
  );
}

export default Projects;
