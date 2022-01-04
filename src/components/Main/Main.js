import { Container } from './MainStyle';
import { useTranslation } from 'react-i18next';
import MyAvatar from '../Avatar/Avatar';

const Main = () => {
  const { t } = useTranslation();
  return (
    <Container>
      asdasdasdasdasasdasdasdsad
      <MyAvatar />
      <p>{t('translation:name')}</p>
    </Container>
  );
}

export default Main;
