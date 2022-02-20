import styled from 'styled-components';
import color from './../../theme.json';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Content = styled.div`
  margin: 120px 0px 0px 0px;
`;

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 80%;
    max-height: 120px;
    z-index: 1000;
`;

export const MenuContainer = styled.div`
    padding: 24px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: ${color.basic.primary};
    @media only screen and (max-width: 900px) {
      padding: 12px 0;
    }
`;

export const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    font-family: 'Space Mono', monospace;
    color: ${color.basic.orange};
    cursor: pointer;
    font-size: 16px;
    padding: 10px 12px;
`;