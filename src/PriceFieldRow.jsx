import React, { useEffect, useState } from 'react';
import { FormFieldRow } from './FormFieldRow.jsx'

export const PriceFieldRow = ({ validated, onValidate }) =>{
    const errorMessageText = 'Invalid price';
    const [hasError, setError] = useState(false);
    const [text, setText] = useState('');
    const onChange = (text) => {
        setText(text)
    }

    const onValidatePrice = () =>{
        const error = !text || !text.match(/^\d\d\.\d\d$/);
        setError(error);
        return onValidate(text, error)
    }

    useEffect(()=>{
        if (!validated){
            onValidatePrice(text, hasError);
        }
    }, [validated])
    return (<FormFieldRow label={"Price"} placeholder={"Price format **.**"} onChange = {onChange} errorText = {hasError? errorMessageText : ''}/>)
}