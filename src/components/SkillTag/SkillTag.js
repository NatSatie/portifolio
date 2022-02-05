import { Container, Paragraph } from './SkillTagStyle';
import { useTranslation } from 'react-i18next';

const SkillTag = ({name, icon}) => {
  const { t } = useTranslation('translation');

  return (
    <Container>
        {icon}
        <Paragraph hasIcon={!!icon}>{name}</Paragraph>
    </Container>
  );
}

export default SkillTag;
