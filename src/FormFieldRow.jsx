import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants.js';

import styled from "styled-components";

const LabelLayout = styled.div`
    flex: 1;
    text-align: left;
    @media screen and (max-width: 600px)  {
        width: 100%;
    }
`

const ErrorMessageLayout = styled.div`
    font-size: small;
    color: ${PRIMARY_COLOR};
    position: absolute;
`

const InputLayout = styled.div`
flex: 2;
text-align: left;
position: relative;
@media screen and (max-width: 600px)  {
    flex: 1;
    left: 0;
    width: 100%;
    top: 10px;
}
& input {
    height: 20px;
    border: ${(props) => (props.errorText ? `1px solid ${PRIMARY_COLOR};` : `border: 1px solid ${SECONDARY_COLOR}`)};
}
`

const Label = ({ label }) => {
    return (<LabelLayout>{label}</LabelLayout>)
}

const InputField = ({ text, placeholder, errorText, onChange }) => {
    const onChangeField = (event) => {
        onChange(event.target.value)
    }
    return (<InputLayout errorText={errorText}><input
        type="text"
        size="30"
        placeholder={placeholder}
        onChange={onChangeField}
        value={text}
    />
    {errorText && (<ErrorMessageLayout>{errorText}</ErrorMessageLayout>)}
    </InputLayout>)
}

const FormFieldRowLayout = styled.div`
    display: flex;
    height: 50px;
    height: 50px;
    align-items: center;
    margin: 30px;
    @media screen and (max-width: 600px)  {
        flex-flow: column wrap;
    }
}
`
export const FormFieldRow = ({ label, placeholder, onChange, errorText }) => {
    return (<FormFieldRowLayout><Label label={label} /><InputField label={label} placeholder = {placeholder} onChange={onChange} errorText={errorText}/></FormFieldRowLayout>)
}