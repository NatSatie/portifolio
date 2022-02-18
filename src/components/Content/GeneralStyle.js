import styled from 'styled-components';
import color from './../../theme.json';

export const Title = styled.div`
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding: 12px 0;
`;

export const Subtitle = styled.div`
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding: 12px 0 12px 0;
`;

export const SecondaryTitle = styled.div`
    font-family: Space Mono;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 5vh;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding: 12px 0;
`;

export const SecondarySubtitle = styled.div`
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const Info = styled.div`
    font-family: Space Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const Description = styled.div`
    font-family: Space Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px 16px 32px 0;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px 32px 32px 0;
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, ${color.basic.pink}, ${color.basic.purple});
    border-radius: 5px;
    padding: 24px;
    justify-content: space-between;
`;


export const SkillDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 50vw;
    flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
      max-width: 100%
    }
`;

export const Container = styled.div`
  background: ${color.basic.primary};
  display: flex;
  flex-direction: ${props => props.isColumn ? "column" : "row"};
  width: 100%;
  padding: 36px 0;
  overflow: auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const CollumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:${props => props.isShared ? "75%" : "100%"};

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const FlexibleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 0;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

export const ImageContainer = styled.div`
  padding: 0 32px 0 0;
  @media only screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  display: block;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const ProjectImage = styled.img`
  object-fit: fill;
  height: 50%;
  width: 50%;
`;