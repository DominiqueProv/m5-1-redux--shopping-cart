import React from 'react';
import styled from 'styled-components';


const CartItem = ({item}) => {
  console.log(item)
  return (
    <Wrapper>
      <Inner>
      <h2>Hello World</h2><p>X</p>
      </Inner>
      <FormWrapper>
    <form style={{padding: '10px 0'}}>
      <label style ={{ padding: '10px', margin: '10px 10px 10px 0', color: 'lightgrey'}}>Quantity:</label>
      <input style={{ width: '30px', fontSize:'1em', fontWeight:'bolder', backgroundColor:'#301732', border: 'none', borderBottom: '2px solid white', color: 'white', textAlign: 'center' }}></input>
    </form>
      </FormWrapper>
    </Wrapper>
  );
}

export default CartItem

const Wrapper = styled.div`
display: flex;
flex-direction: column;
border : 2px dashed #533657;
/* margin: 15px; */
  h2{
    margin: 0;
    padding: 10px;
  }
  p{
    margin: 0;
    padding: 10px;
  }
`

const Inner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

const FormWrapper = styled.div`
background-color: #301732;
margin: 0;
`