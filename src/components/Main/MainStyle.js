import styled from 'styled-components';
import color from './../../theme.json';

export const Container = styled.div`
  background: ${color.basic.white};
  display: flex;
  flex-direction: column;
  width: 70%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;