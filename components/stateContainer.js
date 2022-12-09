//vmos a usar context para crear y manejar estados... importamos createContext ... el contexto estara formado por una serie de metodos y funciones que voy a implementar
// una propiedad llamado isOpen, otra que permita almacenar items, luego metodos como openCart, addItemToCart y getNumberOfItems ... aca definimos las funciones nada mas, asi nomas vacias
//luego cuando las llamemos les ponemos la logica

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    isOpen: true,
    items: [],
    openCart: () => { },
    closeCart: () => { },
    addItemToCart: (item) => { },
    getNumberOfItems: () => { },
});

//ahora dentro de StateContainer vamos a definir cada una de las propiedades/metodos
//isOpen la defino como un estado
export default function StateContainer({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function handleOpenCart() {
        setIsOpen(true);
    }

    function handleCloseCart() {
        setIsOpen(false);
    }

    function handleAddItemToCart(item) {
        const temp = [...items];
        const found = temp.find(product => product.id === item.id); //esto me devuelve el primer producto que coincida con el id

        if (found) { //validacion
            found.quantity++;
        } else {
            item.quantity = 1; //si no lo encuentra lo agrego
            temp.push(item);
        }

        setItems([...temp])
    }

    //sumar el numero de elementos que tengo en el carrito
    function handleNumberOfItems() {
        const total = items.reduce((acc, item) => acc + item.quantity, 0);
        return total;

    }

    return <AppContext.Provider value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closecart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
    }}>{children}
    </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext);
}