import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const ChangeLang = () => {
  const { t, i18n } = useTranslation('translation');
  const [lang, setLang] = useState('pt');

  const handleChange = (event) => {
    setLang(event.target.value)
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Box>
        <FormControl>
          <InputLabel id="select-label-change-language">{t('lang.title')}</InputLabel>
          <Select
            labelId="select-label-change-language"
            id="select-label-change-language"
            value={lang}
            label={t('lang.title')}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value='en'>
              {t('lang.en')}
            </MenuItem>
            <MenuItem value='pt'>
              {t('lang.pt')}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default ChangeLang;
