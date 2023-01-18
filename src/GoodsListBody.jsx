import React from 'react';
import styled from 'styled-components'
import { GoodsListCell } from './GoodsListCell.jsx';
import { COLS_WIDTH } from './constants.js'

const GoodsListRowLayout = styled.div`
   text-align: center;
   display: flex;
   flex-direction: row;
   min-height: 70px;
`

export const GoodsListRow = ({ good, index }) => {
    return (<GoodsListRowLayout>
        <GoodsListCell text={index} colWidth={COLS_WIDTH.rowIndex} />
        <GoodsListCell text={good.title} colWidth={COLS_WIDTH.title} />
        <GoodsListCell text={good.price} colWidth={COLS_WIDTH.price} />
        <GoodsListCell text={good.date} colWidth={COLS_WIDTH.date}></GoodsListCell>
    </GoodsListRowLayout>)
}

export const GoodsListBody = ({ goods }) => {
    return (<>{
        goods.map((good, index) => (<GoodsListRow key={index} good={good} index={index + 1} />))
    }</>)
}