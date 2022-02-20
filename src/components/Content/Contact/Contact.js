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
      "href": "https://www.linkedin.com/in/natalia-satie/",
    },
    {
      "name": "Github",
      "icon": <SiGithub/>,
      "href": "https://github.com/NatSatie",
    },
    {
      "name": "Dev.to",
      "icon": <FaDev/>,
      "href": "https://dev.to/satie_sann",
    }
  ];

  return (
    <Container isColumn>
        <Title>{t('tabs.contact')}</Title>
        <FlexibleContainer>
          {info.map(elem =>
            <Button style={{
                backgroundColor: '#EA628D',
                color: '#160040',
                margin: '0 12px 24px 0'
              }}
              variant="contained"
              startIcon={elem.icon}
              fontSize="large"
              href={elem.href}
              target="_blank"
            >
              {elem.name}
            </Button>
        )}
      </FlexibleContainer>
    </Container>
  );
}

export default Contact;