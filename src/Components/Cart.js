import React from 'react';
import { UserContext, useContext } from '../Context/Context';
import { CardItem } from './CardItem';


export function Cart() {

  const { state } = useContext(UserContext);
  return (
    //Mapping the cart state
    <>
      {state.cart.map((card, index) => (
        <CardItem key={index} card={card} />
      ))}
    </>
  )
}
