import React, { useEffect, useState } from 'react';
import { FormFieldRow } from './FormFieldRow.jsx'

export const DateFieldRow = ({ validated, onValidate }) =>{

    const errorMessageText = 'Invalid date time';

    const [hasError, setError] = useState(false);
    const [text, setText] = useState('');
    const onChange = (text) => {
        setText(text)
    }

    const onValidateDate = () =>{
        const error = !text || !text.match(/^[0-3]\d\.[0-1]\d\.[1-2]\d\d\d, [0-2]\d:[0-5]\d:[0-5]\d$/);
        setError(error);
        return onValidate(text, error)
    }

    useEffect(()=>{
        if (!validated){
            onValidateDate(text, hasError);
        }
    }, [validated])
    return (<FormFieldRow label={"Date and time"} placeholder={"Date format dd.mm.yyyy, hh:mm:ss"} onChange = {onChange} errorText = {hasError? errorMessageText : ''}/>)
}