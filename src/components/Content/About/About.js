import { useTranslation } from 'react-i18next';
import { 
  ImageContainer, Image, Container, Title, Info, CollumnContainer, Description, Subtitle, SkillDiv
} from './../GeneralStyle';
import image from  './../../../about.png';
import Button from '@mui/material/Button';

const About = () => {
  const { t, i18n} = useTranslation('translation');

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
                <b>{t('education.graduation')}</b>
            </Description>
            <Description>
                {t('education.description')}
            </Description>
            <br/>
            <Button style={{
                backgroundColor: "#E49A67",
                color: 'black',
                margin: '0 12px 24px 0',
                maxWidth: '200px'
              }}
              variant="contained"
              href={ i18n.language === 'en'? "https://ic.unicamp.br/en/graduacao/ciencia-da-computacao/" : "https://ic.unicamp.br/graduacao/ciencia-da-computacao/"}
              target="_blank"
            >
              {t('education.findMore')}
            </Button>
        </CollumnContainer>
    </Container>
  );
}

export default About;
