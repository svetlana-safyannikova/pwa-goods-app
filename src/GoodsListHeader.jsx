import React from 'react';
import styled from 'styled-components'
import { GoodsListCell } from './GoodsListCell.jsx';
import { DEFAULT_BORDER, COLS_WIDTH } from './constants.js';

const GoodsListHeaderLayout = styled.div`
   text-align: center;
   display: flex;
   flex-direction: row;
   font-weight: bold;
   border-top: ${DEFAULT_BORDER};
   min-height: 70px;
`

export const GoodsListHeader = () => {
  return (<GoodsListHeaderLayout>
    <GoodsListCell text={'#'} colWidth={COLS_WIDTH.rowIndex} />
    <GoodsListCell text={'Title'} colWidth={COLS_WIDTH.title} />
    <GoodsListCell text={'Price, USD'} colWidth={COLS_WIDTH.price} />
    <GoodsListCell text={'Date and time'} colWidth={COLS_WIDTH.date} />
  </GoodsListHeaderLayout>)
}