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
    font-size: 12px;
    padding: 2px 4px;
    align-items: center;
    margin: 0 10px 10px 0 ;
`;

export const Paragraph = styled.div`
    font-family: Space Mono;
    font-size: 12px;
    font-style: normal;
    padding: ${props => props.hasIcon ? "0 0 0 6px" : "0"};
    font-weight: 400;
`;