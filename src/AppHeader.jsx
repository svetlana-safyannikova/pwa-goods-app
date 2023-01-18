import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from './constants.js'

const Logo = styled.div`
   width : 50px;
   position: absolute;
`

const TextHeader = styled.div`
   color: ${PRIMARY_COLOR};
   font-weight: bold;
   font-size: larger;
   text-align: center;
   width: 100%;
`

const AppHeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
`

export const AppHeader = () => {
    return (<AppHeaderLayout>
        <Logo>STOCK CENTER</Logo>
        <TextHeader>Items in stock</TextHeader>
    </AppHeaderLayout>)
}