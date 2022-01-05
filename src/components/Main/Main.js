import { Container } from './MainStyle';
import { useTranslation } from 'react-i18next';
import MyAvatar from '../Avatar/Avatar';
import Content from '../Content/Content';

const Main = () => {
  const { t } = useTranslation('translation');

  return (
    <Container>
      <MyAvatar />
      <Content />
    </Container>
  );
}

export default Main;
