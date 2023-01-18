import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants.js'

const ButtonLayout = styled.div`
    color: white;
    background: ${({ isPrimary }) => (isPrimary ? PRIMARY_COLOR : SECONDARY_COLOR)};
    width: ${({ width }) => width}px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    margin: 20px;
`

export const CustomButton = ({ text, isPrimary, width, bold, onClick }) => {
    return (<ButtonLayout isPrimary={isPrimary} width={width} bold={bold} onClick = {onClick}>{text}</ButtonLayout>)
}