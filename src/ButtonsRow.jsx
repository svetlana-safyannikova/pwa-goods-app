import React from 'react';
import styled from 'styled-components';
import { CustomButton } from './Button.jsx'

const ButtonsRowLayout = styled.div`
display: flex;
justify-content: center;
height: 50px;
flex-direction: row;
align-items: center;
`
export const ButtonsRow = ({ buttons }) => {
    return (<ButtonsRowLayout>{
        buttons?.map(({ text, isPrimary, width, bold, onClick }, index) => (<CustomButton key={index} isPrimary={isPrimary} width={width} text={text} bold={bold} onClick={onClick}/>))
    }</ButtonsRowLayout>)
}