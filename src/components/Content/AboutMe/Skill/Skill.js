import { useTranslation } from 'react-i18next';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

const Skill = ({ name, experience , description, icon, color}) => {
  const { t } = useTranslation('translation');

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: color }}>
          { icon ? icon : <ImageIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={t(`skill.${experience}.title`)} />
    </ListItem>
  );
}

export default Skill;
