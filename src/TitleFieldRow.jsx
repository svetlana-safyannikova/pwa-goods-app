import React, { useEffect, useState } from 'react';
import { FormFieldRow } from './FormFieldRow.jsx'

export const TitleFieldRow = ({ validated, onValidate }) =>{

    const errorMessageText = 'Invalid title';

    const [hasError, setError] = useState(false);
    const [text, setText] = useState('');
    const onChange = (text) => {
        setText(text)
    }

    const onValidateTitle = () =>{
        const error = !text;
        setError(error);
        return onValidate(text, error)
    }

    useEffect(()=>{
        if (!validated){
            onValidateTitle(text, hasError);
        }
    }, [validated])
    return (<FormFieldRow label={"Title"} placeholder={"Title"} onChange = {onChange} errorText = {hasError? errorMessageText : ''}/>)
}