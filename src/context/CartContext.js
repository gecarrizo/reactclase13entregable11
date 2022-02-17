import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, count) => {
        let findProduct = cartList.find(product => product.idItem === item.id);

        if ( findProduct === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.thumbnail,
                    nameItem: item.name,
                    costItem: item.cost,
                    countItem: count,
                    subTotalItem: item.cost * count
                }
            ]);
        } else {
            findProduct.countItem += count;
            findProduct.subTotalItem += item.cost * count;
            setCartList([
                ...cartList]);
        }
    }
    
    const removeItems = () => {
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter (item => item.idItem !== id));
    }

    const accumQuantities = () => {
        let accumQty = cartList.map(item => item.countItem).reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        return accumQty;
    }

    const accumAmount = () => {
        let accumAmn = cartList.map(item => item.subTotalItem).reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        return accumAmn;
    }   

    return (
        <CartContext.Provider value={{cartList, removeItems, removeItem, addItem, accumQuantities, accumAmount}}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;