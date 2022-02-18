import { useTranslation } from 'react-i18next';
import { ImageContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import image from  './../../../about.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const About = () => {
  const { t } = useTranslation('translation');



  return (
    <Container>
        <ImageContainer>
          <Image src={image} isLeft/>
        </ImageContainer>
        <CollumnContainer isLeft isShared>
            <Title>{t('tabs.about')}</Title>
            <Info>
                {t('bio.pronoum')}
            </Info>
            <Description>
                {t('education.graduation')}
            </Description>
            <Button style={{
                backgroundColor: "#E49A67",
                color: 'black',
                margin: '0 12px 0 0'
              }}
              variant="contained" startIcon={<SiGithub />}
              href={rep}
              target="_blank"
            >
              Github Repo
            </Button>
            <Title>{t('tabs.skills')}</Title>
            <Description>
                {t('skills.frontend')}
            </Description>
            <Description>
                {t('skills.backend')}
            </Description>
            <Description>
                {t('skills.coding')}
            </Description>
        </CollumnContainer>
    </Container>
  );
}

export default About;
