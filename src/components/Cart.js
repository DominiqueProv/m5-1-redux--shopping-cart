import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import CartItem from './CartItem';
import { getStoreItemArray } from '../reducers';

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  return (
    <>
      <Wrapper>
        <Top>
          <h1>Your Cart</h1>
          <p>1 Item</p>
          {storeItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

        </Top>
        <Checkout>
          <h4>Total: <span style={{ fontWeigth: 'bolder' }}>$12.34</span></h4>
          <PurshaseButton>Purshase</PurshaseButton>
        </Checkout>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.section`
 background-color: #402044;
 position: sticky;
 display:flex;
 flex-direction: column;
 justify-content: space-between;
 top:0;
 min-width: 300px;
 color: white;
 height: 100vh;
  h1{
    margin: 0;
    padding: 25px 0 25px 15px;
  }
  p{
    color: lightgrey;
    padding: 10px 10px 25px 15px;
    margin: 0px;
  }
`

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`

const Checkout = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
  h4{
    margin: 0px;
  }
`

const PurshaseButton = styled.button`
background-color: #FF406F;
border-radius: 8px;
color: white;
/* height: 20px; */
padding: 8px 20px;
font-size: 1em;
font-weight: bolder;
border: none;
cursor: pointer;

`

export default Cart
