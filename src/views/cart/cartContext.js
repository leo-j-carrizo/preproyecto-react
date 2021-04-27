import React, {createContext, useContext, useState } from 'react'
import ItemDetail from '../item/itemDetail';

export const CartContext = createContext("dou");

export function CartProvider({children}) {

    const [state, setstate] = useState("default")

    console.log(state)

    // function addItem(item,quantity){
    //     return
    // }
    // function removeItem(itemId){
    //     return
    // }
    // function clear(){
    //     return
    // }
    // function isInCart(id){
    //     return
    // }
    return (
    <CartContext.provider value={"hola"}>
        <ItemDetail/>
    </CartContext.provider>
    );
}

export default CartProvider
