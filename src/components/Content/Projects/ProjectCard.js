import { useTranslation } from 'react-i18next';
import { SkillDiv, ProjectContainer, Subtitle, RowContainer, SecondarySubtitle, Image, Container, Title, Info, CollumnContainer, Description } from '../GeneralStyle';
import Button from '@mui/material/Button';
import { SiGithub, SiCodesandbox } from "react-icons/si";
import SkillTag from '../../SkillTag/SkillTag';

const ProjectCard = ({ name, tags, img, description, rep, demo}) => {
  const { t } = useTranslation('translation');

  const Buttons = () => (
    <>
      { rep &&
          <Button style={{
              backgroundColor: "#E49A67",
              color: 'black',
              margin: '0 12px 0 0'
            }}
            variant="contained" startIcon={<SiGithub />}
            href={rep}
            target="_blank"
          >
            Github Repo
          </Button>
        }
        { demo &&
          <Button style={{
              backgroundColor: "#E49A67",
              color: 'black',
              margin: '0 12px 0 0'
            }}
            variant="contained" startIcon={<SiCodesandbox />}
            href={demo}
            target="_blank"
          >
            Demo
          </Button>
        }
    </>
  );

  return (
    <ProjectContainer>
      {img}
      <Subtitle>
        {name}
      </Subtitle>
      <Description>
        {description}
      </Description>
      {tags && <SkillDiv>
        { tags.map( elem => <SkillTag name={elem.name} icon={elem.icon} />) }
      </SkillDiv>}
      <RowContainer>
        <Buttons/>
      </RowContainer>
    </ProjectContainer>
  );
}

export default ProjectCard;
