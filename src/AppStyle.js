import styled from 'styled-components';
import color from './theme.json';

export const Container = styled.div`
  background: ${color.basic.primary};
  display: flex;
  flex-direction: collumn;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;