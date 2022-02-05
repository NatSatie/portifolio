import styled from 'styled-components';
import color from './../../theme.json';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 24px;
    border: 2px solid ${color.basic.orange};
    border-radius: 3px;
    background-color: ${props => props.isSelected ? color.basic.orange : color.basic.primary};
`;

export const Language = styled.button`
    background-color: ${props => props.isSelected ? color.basic.orange : color.basic.primary};
    border: none;
    cursor: pointer;
    font-family: 'Space Mono', monospace;
    color: ${props => props.isSelected ? color.basic.primary : color.basic.orange};
    font-size: 18px;
    padding: 3px 6px;
    height: 100%;
`;

export const IconContainer = styled.button`
    border: none;
    background-color: ${props => props.isSelected ? color.basic.orange : color.basic.primary};
    color: ${props => props.isSelected ? color.basic.primary : color.basic.orange};
`;