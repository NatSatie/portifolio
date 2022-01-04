import profile from './profile.jpg';

import { Avatar } from '@mui/material';

const MyAvatar = () => {
  return (
      <Avatar
        alt="Natália Satie Odashima profile image"
        src={profile}
        sx={{ width: 126, height: 126 }}
      />
  );
}

export default MyAvatar;