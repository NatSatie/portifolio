import { useTranslation } from 'react-i18next';
import { SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from './../GeneralStyle';
import image from  './../../../about.png'
import Stack from '@mui/material/Stack';

const Contact = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
        <CollumnContainer>
            <Title>{t('tabs.contact')}</Title>
            <Info>
                {t('bio.pronoum')}
            </Info>
            <SecondarySubtitle>{t('education.title')}</SecondarySubtitle>
            <Description>
                {t('education.graduation')}
            </Description>
        </CollumnContainer>
    </Container>
  );
}

export default Contact;