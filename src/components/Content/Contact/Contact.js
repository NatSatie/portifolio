import { useTranslation } from 'react-i18next';
import { SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description, FlexibleContainer } from './../GeneralStyle';
import { FaDev } from "react-icons/fa";
import { SiGithub, SiDevdotto, SiBehance, SiLinkedin } from "react-icons/si";
import Button from '@mui/material/Button';

const Contact = () => {
  const { t } = useTranslation('translation');

  const info = [
    {
      "name": "LinkedIn",
      "icon": <SiLinkedin/>,
      "href": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Github",
      "icon": <SiGithub/>,
      "href": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Dev.to",
      "icon": <FaDev/>,
      "href": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    },
    {
      "name": "Behance",
      "icon": <SiBehance/>,
      "href": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum.",
    }
  ];

  return (
    <Container isColumn>
        <Title>{t('tabs.contact')}</Title>
        <FlexibleContainer>
          {info.map(elem =>
            <Button style={{
                backgroundColor: 'transparent',
                color: 'pink',
                margin: '0 12px 24px 0'
              }}
              variant="contained"
              startIcon={elem.icon}
              fontSize="large"
            >
              {elem.name}
            </Button>
        )}
      </FlexibleContainer>
    </Container>
  );
}

export default Contact;