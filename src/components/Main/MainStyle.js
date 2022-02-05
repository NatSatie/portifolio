import styled from 'styled-components';
import color from './../../theme.json';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 90px 0px 0px 0px;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 80%;
    max-height: 90px;
`;

export const MenuContainer = styled.div`
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: ${color.basic.primary};
`;

export const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    font-family: 'Space Mono', monospace;
    color: ${color.basic.orange};
    cursor: pointer;
    font-size: 24px;
`;