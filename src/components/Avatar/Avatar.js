import profile from './profile.jpg';
import background from './background.png';
import { useTranslation } from 'react-i18next';
import { AvatarContainer, Container, Image, ImageContainer, Text, BoldText, TextContainer } from './AvatarStyle';
import ChangeLang from '../ChangeLang/ChangeLang';

import { Avatar } from '@mui/material';

const MyAvatar = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <ImageContainer>
        <Image src={background} alt="Background theme" />
      </ImageContainer>
      <Container>
        <AvatarContainer>
          <Avatar
            alt="Natália Satie Odashima profile image"
            src={profile}
            sx={{ width: 126, height: 126 }}
          />
        </AvatarContainer>
        <TextContainer>
          <BoldText>Natália Satie Odashima</BoldText>
          <Text>{t('bio.graduation')}</Text>
          <Text>2016-{t('now')}</Text>
        </TextContainer>
        <ChangeLang />
      </Container>
    </>
  );
}

export default MyAvatar;