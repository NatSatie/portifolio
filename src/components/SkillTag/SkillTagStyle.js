import styled from 'styled-components';
import color from './../../theme.json';

export const Container = styled.div`
    border-radius: 5px;
    border: 2px solid ${color.basic.pink};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    background-color: ${color.basic.pink};
    font-size: 16px;
    padding: 2px 4px;
    align-items: center;
`;

export const Paragraph = styled.div`
    font-family: Space Mono;
    font-size: 13px;
    font-style: normal;
    padding: ${props => props.hasIcon ? "0 0 0 6px" : "0"};
    font-weight: 400;
`;