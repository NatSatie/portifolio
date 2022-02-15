import { useTranslation } from 'react-i18next';
import { ImageContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import image from  './../../../about.png'
import Stack from '@mui/material/Stack';

const About = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
        <ImageContainer>
          <Image src={image} isLeft/>
        </ImageContainer>
        <CollumnContainer isLeft>
            <Title>{t('tabs.about')}</Title>
            <Info>
                {t('bio.pronoum')}
            </Info>
            <Description>
                {t('education.graduation')}
            </Description>
        </CollumnContainer>
    </Container>
  );
}

export default About;
