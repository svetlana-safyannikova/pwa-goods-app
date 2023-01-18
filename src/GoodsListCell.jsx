import React from 'react';
import styled from 'styled-components'
import { DEFAULT_BORDER } from './constants.js'

const GoodsListCellLayout = styled.div`
    border-bottom: ${DEFAULT_BORDER};
    flex: ${({ colWidth }) => (`${colWidth} 50px`)};
    min-width: 50px;
    text-align: left;
    padding: 20px 10px;
    display: flex;
    & span {
        align-self: flex-end;
    }
`

export const GoodsListCell = ({ text, colWidth }) => {
    return (<GoodsListCellLayout colWidth={colWidth}><span>{text}</span></GoodsListCellLayout>)
}