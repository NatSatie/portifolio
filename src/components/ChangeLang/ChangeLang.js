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
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Box>
        <FormControl sx={{ minWidth: 80 }}>
          <InputLabel id="select-label-change-language"
            inputProps={{
              style: {fontSize: 12} 
            }}
          >
            {t('lang.title')}</InputLabel>
          <Select
            labelId="select-label-change-language"
            id="select-label-change-language"
            value={lang}
            label={t('lang.title')}
            onChange={handleChange}
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
