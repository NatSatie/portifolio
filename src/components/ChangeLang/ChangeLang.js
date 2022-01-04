import { Container } from './MainStyle';
import { useTranslation } from 'react-i18next';
import profile from '../images/profile.jpg';

import { Avatar } from '@mui/material';

const ChangeLang = () => {
  const { t } = useTranslation();
  return (
    <Container>
      asdasdasdasdas
      <Avatar
        alt="Natália Satie Odashima profile image"
        src={profile}
        sx={{ width: 126, height: 126 }}
      />
      <p>{t('name')}</p>
      <
    </Container>
  );
}

export default ChangeLang;
