import profile from './profile.jpg';
import { AvatarContainer, Container, Text } from './AvatarStyle';

import { Avatar } from '@mui/material';

const MyAvatar = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          alt="Natália Satie Odashima profile image"
          src={profile}
          sx={{ width: 126, height: 126 }}
        />
      </AvatarContainer>
      <Text>Natália Satie Odashima</Text>
    </Container>
  );
}

export default MyAvatar;