import styled from 'styled-components';
import color from './../../theme.json';

export const Title = styled.h2`
    font-family: Roboto;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const Subtitle = styled.div`
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const SecondaryTitle = styled.h4`
    font-family: Space Mono;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const SecondarySubtitle = styled.h3`
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const Info = styled.div`
    font-family: Space Mono;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const Description = styled.p`
    font-family: Space Mono;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const SkillDiv = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.isColumn ? "column" : "row"};
  width: 100%;
  padding: 36px 0;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CollumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 0 0;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  padding: ${props => props.isLeft ? "0 32px 0 0": "0"}
`;