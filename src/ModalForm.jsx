import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from './constants.js'
import { ModalFormWindow } from './ModalFormWindow.jsx'

const ModalFormBackground = ({onClick}) => {
    return (<ModalFormBackgroundLayout onClick = {onClick}/>)
}

const ModalFormBackgroundLayout = styled.div`
   position: fixed;
   z-index: 100;
   background: white;
   top: 0px;
   bottom: 0px;
   left: 0px;
   right: 0px;
   background: ${SECONDARY_COLOR};
   opacity: 0.8;
`

export const ModalForm = ({setModalFormInVisible}) => {
    return ((<><ModalFormBackground onClick={setModalFormInVisible} /><ModalFormWindow setModalFormInVisible = {setModalFormInVisible}/></>))
}
