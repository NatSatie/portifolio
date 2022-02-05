import { useTranslation } from 'react-i18next';
import { Container, Language, IconContainer } from './ChangeLangStyle';

import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';

const ChangeLang = () => {
  const { t, i18n } = useTranslation('translation');
  const [lang, setLang] = useState('pt');

  const handleChange = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Container isSelected={lang === 'pt'}>
      <IconContainer isSelected={lang === 'pt'}>
        <LanguageIcon fontSize="small"/>
      </IconContainer>
      <Language isSelected={lang === 'pt'} onClick={() => handleChange('pt')}>{t('lang.pt')}</Language>
      <Language isSelected={lang === 'en'} onClick={() => handleChange('en')}>{t('lang.en')}</Language>
    </Container>
  );
}

export default ChangeLang;
