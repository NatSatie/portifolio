import { Container } from './MainStyle';
import { useTranslation } from 'react-i18next';
import MyAvatar from '../Avatar/Avatar';
import ChangeLang from '../ChangeLang/ChangeLang';

const Main = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
      <MyAvatar />
      <ChangeLang />
    </Container>
  );
}

export default Main;
