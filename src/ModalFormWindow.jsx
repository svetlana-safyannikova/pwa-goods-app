import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { DEFAULT_BORDER, SECONDARY_COLOR } from './constants.js';
import { TitleFieldRow } from './TitleFieldRow.jsx';
import { PriceFieldRow } from './PriceFieldRow.jsx';
import { DateFieldRow } from './DateFieldRow.jsx';
import { ButtonsRow } from './ButtonsRow.jsx';
import { setGoods } from './utils.js';

const ModalFormLayout = styled.div`
   position: fixed;
   z-index: 100;
   background: white;
   top: 100px;
   bottom: 100px;
   left: 100px;
   right: 100px;
   border-radius: 5px;
   min-width:350px;
`

const HeaderNameLayout = styled.div`      
    text-align: left;
`

const ModalFormWindowHeaderLayout = styled.div`
    padding: 30px;
    font-weight: bold;
    font-size: x-large;
    border-bottom: ${DEFAULT_BORDER};
    position: relative;
`

const CloseIcon = styled.div`
   color: ${SECONDARY_COLOR};
   position: absolute;
   right: 0px;
   top: 0px;
   margin: 30px;
   cursor: pointer;
`
const FooterLayoutInner = styled.div`
width: 400px;
position: absolute;
right: 0;
`
const FooterLayout = styled.div`
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    border-top: ${DEFAULT_BORDER};
    width: 100%;

`

export const ModalFormWindow = ({setModalFormInVisible}) => {
    const hasFormError = useRef(true);

    const [isValidatedTitle, setTitleValidated] = useState(true);
    const [title, setTitleText] = useState(undefined);

    const [isValidatedPrice, setPriceValidated] = useState(true);
    const [price, setPriceText] = useState(undefined);

    const [isValidatedDate, setDateValidated] = useState(true);
    const [date, setDateText] = useState(undefined);

    const onValidateTitle = (title, hasError) => {
        hasFormError.current = hasError ? hasError : hasFormError.current;
        setTitleText(title);
        setTitleValidated(true);
    }

    const onValidatePrice = (price, hasError) => {
        hasFormError.current = hasError ? hasError : hasFormError.current;
        setPriceValidated(true)
        setPriceText(price);
    }

    const onValidateDate = (date, hasError) => {
        hasFormError.current = hasError ? hasError : hasFormError.current;
        setDateValidated(true)
        setDateText(date);
    }

    const addItems = () => {
        hasFormError.current = false;
        setTitleValidated(false);
        setPriceValidated(false);
        setDateValidated(false);
    }

    useEffect(()=>{
        if (!hasFormError.current && isValidatedTitle && isValidatedPrice && isValidatedDate &&
            (title !== undefined && price !== undefined && date !== undefined)){
            setGoods({title, price, date});
            setModalFormInVisible();
        }
    },[isValidatedTitle, isValidatedPrice, isValidatedDate])

    return (<ModalFormLayout>
        <ModalFormWindowHeaderLayout>
            <HeaderNameLayout>New item</HeaderNameLayout>
            <CloseIcon onClick={setModalFormInVisible}>x</CloseIcon>
        </ModalFormWindowHeaderLayout>
        <TitleFieldRow validated = {isValidatedTitle} onValidate = {onValidateTitle}/>
        <PriceFieldRow validated = {isValidatedPrice} onValidate = {onValidatePrice}/>
        <DateFieldRow validated = {isValidatedDate} onValidate = {onValidateDate}/>
        <FooterLayout>
            <FooterLayoutInner>
                <ButtonsRow buttons={[{ width: 150, isPrimary: false, text: 'Cancel', onClick : setModalFormInVisible }, { width: 150, isPrimary: true, text: 'Add', onClick : addItems }]} />
            </FooterLayoutInner>
        </FooterLayout>
    </ModalFormLayout>)
}