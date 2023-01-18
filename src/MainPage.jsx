import React, { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList.jsx';
import { ButtonsRow } from './ButtonsRow.jsx';
import styled from 'styled-components';
import { getGoods } from './utils.js'

const FooterLayout = styled.div`
   position: fixed;
   bottom: 100px;
   width: 100%;
`

export const MainPage = ({isModalFormVisible, setModalFormVisible}) => {
    const [goods, setGoods] = useState([]);
    useEffect(()=>{
        setGoods(getGoods());
    }, [isModalFormVisible])
    return (<>
        <GoodsList goods={goods} />
        <FooterLayout>
            <ButtonsRow buttons={[{ width: 300, isPrimary: true, text: 'New item', bold: true, onClick : setModalFormVisible }]} />
        </FooterLayout>
    </>)
}