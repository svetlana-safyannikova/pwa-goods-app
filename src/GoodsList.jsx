import React from 'react';
import { GoodsListHeader } from './GoodsListHeader.jsx';
import { GoodsListBody } from './GoodsListBody.jsx';
import styled from 'styled-components';

const GoodsListLayout = styled.div`
   margin-top: 40px;
`

export const GoodsList = ({ goods }) => {
    return (<GoodsListLayout>
        <GoodsListHeader />
        <GoodsListBody goods={goods} />
    </GoodsListLayout>)
}
