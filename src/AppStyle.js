import styled from 'styled-components';
import color from './theme.json';

export const Container = styled.div`
  background: ${color.basic.primary};
  display: flex;
  flex-direction: collumn;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
`;