import styled from 'styled-components';
import color from './../../theme.json';

export const AvatarContainer = styled.div`
  padding: 0 16px 0 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  height: 200px;
  padding: 0 0 24px 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 0 0;
`;

export const BoldText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  padding: 0 0 6px 0;
  margin: 0;
`;

export const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  padding: 1px 0;
  margin: 0;
`;